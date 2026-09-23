import express from "express";
import mysql2 from "mysql2";
import cors from "cors"

const app = express()
app.use(cors())

app.use(express.json()) 


app.get("/", (request, response) => {
    const selectCommand = "SELECT * FROM filmes_IgorFernandes"

    sql.query(selectCommand, (error, data) => {
        if (error) {
            console.log(error)
            return
        }

        response.json(data)
    })
})

app.get("/movie/:id", (request, response) => {
    const { id } = request.params

    const selectByIdCommand = "SELECT * FROM filmes_IgorFernandes WHERE id = ?"

    sql.query(selectByIdCommand, [id], (error, data) => {
        if (error) {
            console.log(error)
            return response.status(500).json({ message: "Erro ao buscar o filme." })
        }

        if (data.length === 0) {
            return response.status(404).json({ message: "Filme não encontrado." })
        }

        response.json(data[0])
    })
})

app.post("/create-movie", (request,response) =>{

    const {nome, genero, duracao ,classificacao } = request.body
    
    const insertCommand = "INSERT INTO filmes_IgorFernandes(nome, genero, duracao ,classificacao) VALUES (?,?,?,?)"

    sql.query( insertCommand, [nome, genero, duracao ,classificacao], (error) =>{
        if(error){
            console.log(error)
            return
        }

        response.status(201).json({
            message: "Filme criada com sucesso!"
        })
    })
})

app.put("/update-movie/:id", (request, response) => {
    
    const { id } = request.params; 
    
    const { nome, genero, duracao ,classificacao } = request.body; 

   
    const updateCommand = "UPDATE filmes_IgorFernandes SET nome = ?, genero = ?, duracao = ?, classificacao = ? WHERE id = ?";

    sql.query(updateCommand, [nome, genero, duracao, classificacao, id], (error, results) => {
        if (error) {
            console.log(error);
            return response.status(500).json({ message: "Erro ao atualizar o filme." });
        }

        
        return response.status(200).json({
            message: "Filme atualizado com sucesso!"
        });
    });
});

app.delete("/delete-movie/:id", (request,response) =>{
    console.log(request.params.id)

    const{ id } = request.params
    const deleteCommand = "DELETE FROM filmes_IgorFernandes WHERE id = ?"

    sql.query(deleteCommand, [id], (error) =>{
        if(error) {
            console.log(error)
            return
        }

        response.json({
            message:"Tarefa apagada com sucesso!"
        })
    })
})


app.listen (3067, () => {
    console.log("Servidor rodando na porta 67")
})


const sql = mysql2.createPool({

    host: "benserverplex.ddns.net",
    user: "alunos",
    password: "senhaAlunos",
    database: "alunos_filmes03TB"
})