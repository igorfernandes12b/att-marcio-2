# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Estudante (dono do repositório, Igor Fernandes) entregando atividade de faculdade sobre CRUD com Express + MySQL. O avaliador (professor) é quem confere o sistema funcionando ao vivo via link da Vercel. Não há usuário final real além desses dois.

## Product Purpose

Catálogo de filmes com CRUD completo: listar, cadastrar, editar e apagar filmes, servindo como entrega de atividade avaliativa (três notas: cadastro, apagar, editar).

## Positioning

Não é produto comercial — é exercício acadêmico demonstrando domínio de requisições HTTP (GET/POST/PUT/DELETE) contra API própria consumida por frontend estático sem framework.

## Operating Context

- Backend: Express 5 + mysql2, tabela `filmes_IgorFernandes` (nome, genero, duracao, classificacao) em banco MySQL compartilhado do professor — schema não pode ser alterado.
- Frontend: HTML/CSS/JS puro, sem framework, sem bundler.
- Deploy: backend e frontend na Vercel; link do GitHub também será entregue.

## Capabilities and Constraints

- Confirmado: campos do filme são nome (texto), genero (texto), duracao (número, minutos), classificacao (número — 0 tratado como "Livre" na exibição atual).
- Constraint: nome da tabela e das colunas no MySQL é fixo, não pode mudar.
- Constraint: sem framework de frontend — só HTML/CSS/JS vanilla.
- Em aberto: nenhuma autenticação — sistema é público/aberto por natureza da atividade.

## Brand Commitments

Nenhuma marca própria — projeto usa apenas o título "Lista de Filmes" já presente no HTML original.

## Evidence on Hand

Nenhum dado real de filmes fornecido; conteúdo de exemplo (placeholders de filmes) pode ser necessário para demonstrar a listagem, deve ficar claro que são dados de teste inseridos via cadastro.

## Product Principles

1. Funcionalidade da atividade (as 3 notas: cadastrar, apagar, editar) nunca é sacrificada por estética.
2. Simplicidade de manutenção — projeto pequeno, sem framework, código deve continuar legível para nível de estudante.
3. Sistema deve funcionar de ponta a ponta contra a API real na Vercel, não é mockup visual.
