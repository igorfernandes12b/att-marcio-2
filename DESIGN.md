<!-- SEED: established with the user before implementation; re-run $impeccable document once there's code to capture the actual tokens and components. -->

---
name: Lista de Filmes
description: Catálogo editorial de filmes — CRUD acadêmico com cara de revista de cinema impressa
---

# Design System: Lista de Filmes

## Overview

**Creative North Star: "A Revista de Cinema de Arquivo"**

O sistema veste um CRUD acadêmico simples com a linguagem visual de uma revista de cinema impressa — tipo Sight & Sound ou Cahiers du Cinéma digitalizada. Papel claro, tipografia serifada editorial em escala grande para os títulos dos filmes, grid de colunas como página de revista, hairlines finas separando fichas técnicas. Cada filme é tratado como uma "matéria" editorial, não um card de app genérico.

Rejeitado deliberadamente: dashboard escuro tipo streaming (Netflix-clone), cards com sombra flutuante e cantos muito arredondados, paleta neon/gradiente. O acento de cor é único e reservado — usado como se fosse a tinta vermelha de revisão de um editor, não decoração.

**Key Characteristics:**
- Serifada editorial grande carregando os títulos dos filmes como manchete
- Papel claro (off-white), nunca branco puro nem escuro
- Um único acento vermelho-tinta, usado com moderação
- Hairlines finas no lugar de sombras/cards elevados
- Grid de colunas com respiro generoso, como página impressa

## Colors

Paleta restrita: neutros de papel/tinta mais um único acento editorial. O acento nunca ocupa mais que ~10% de qualquer tela.

### Primary
- **Tinta de Revisão** (`#b3271e`): acento único — usado em links ativos, botão primário (cadastrar/salvar), badge de classificação indicativa alta, estados de foco. Reservado — nunca vira cor de fundo de área grande.

### Neutral
- **Papel** (`#f6f1e8`): fundo base de todas as páginas — papel levemente amarelado, nunca branco puro.
- **Tinta Preta** (`#1c1a17`): texto principal, títulos, ícones.
- **Cinza Chumbo** (`#5c574c`): texto secundário, legendas, metadados (gênero/duração).
- **Hairline** (`#d8d0c0`): bordas finas, divisores entre fichas, linhas de tabela.
- **Papel Cartão** (`#efe8da`): fundo de inputs e áreas levemente destacadas (nunca branco puro nem sombra).

### Named Rules
**The One Voice Rule.** O vermelho-tinta aparece em no máximo um elemento por seção de tela — nunca dois acentos vermelhos competindo na mesma vista.

## Typography

**Display Font:** Fraunces (fallback: Georgia, serif)
**Body Font:** Inter (fallback: system-ui, sans-serif)
**Label/Mono Font:** Inter, uppercase com tracking, para labels de campo e metadados

**Character:** Serifada editorial de peso variável para manchetes (títulos de filme) contra uma sans neutra e legível para corpo/formulário — o mesmo par que uma revista usa entre manchete e legenda.

### Hierarchy
- **Display** (peso 380-600 variável, `clamp(2rem, 5vw, 3.5rem)`, line-height 1.05): título da página / nome do filme em destaque.
- **Headline** (peso 500, `1.5rem`, line-height 1.2): títulos de seção, nome do filme em lista.
- **Title** (peso 600, `1rem`, letter-spacing 0.02em): labels de campo em formulários.
- **Body** (peso 400, `1rem`, line-height 1.5): texto corrido, descrições, valores de ficha técnica.
- **Label** (peso 600, `0.75rem`, letter-spacing 0.08em, uppercase): metadados curtos — "GÊNERO", "DURAÇÃO", "CLASSIFICAÇÃO".

### Named Rules
**The Headline Rule.** Nome do filme é sempre a maior peça de texto na tela onde aparece — nunca disputa espaço visual com chrome de UI (botões, nav).

## Layout

Grid de colunas inspirado em página de revista: container centralizado com largura máxima de leitura (`max-width: 1100px`), respiro lateral generoso (`padding: 0 24px` mínimo). Lista de filmes em grid responsivo (`repeat(auto-fill, minmax(280px, 1fr))`, `gap: 32px`), colapsando para coluna única abaixo de 640px. Formulários (cadastro/edição) usam coluna única centralizada, largura máxima ~560px, como uma ficha de arquivo. Espaçamento segue ritmo de 8px (8/16/24/32/48/64).

## Elevation & Depth

Sistema flat — sem sombras. Profundidade vem de hairlines (`1px solid` na cor Hairline) e de leve mudança tonal entre Papel e Papel Cartão, nunca de `box-shadow`.

### Named Rules
**The No-Shadow Rule.** Nenhum elemento usa `box-shadow` decorativo. Separação e hierarquia vêm de linha fina e cor de fundo, como camadas de papel.

## Shapes

Cantos quase retos — radius mínimo (`2px`–`4px`) só para suavizar, nunca pill-shape nem cantos muito arredondados. Bordas são hairlines finas (`1px`), nunca grossas. Imagens/placeholders de pôster (se usados) mantêm proporção retrato 2:3 sem crop agressivo.

## Components

### Buttons
- **Shape:** radius `3px`, quase reto.
- **Primary:** fundo Tinta de Revisão, texto Papel, padding `12px 28px`, label uppercase com tracking (Label type). Usado em "Cadastrar filme" e "Salvar edição".
- **Hover/Focus:** escurece levemente (`#8f1f18`), outline de foco visível em `2px` offset para acessibilidade via teclado.
- **Secondary/Ghost:** fundo transparente, texto Tinta Preta, borda hairline — usado em "Cancelar".
- **Destructive (apagar):** fundo transparente, texto Tinta de Revisão, borda hairline vermelha; confirma ação com estado de hover que preenche fundo Tinta de Revisão — o único lugar onde o acento pode preencher uma área maior, por ser ação irreversível que merece destaque.

### Cards / Containers (ficha de filme)
- **Corner Style:** radius `3px`.
- **Background:** Papel Cartão sobre fundo Papel.
- **Shadow Strategy:** nenhuma — ver Elevation.
- **Border:** hairline `1px` sólida.
- **Internal Padding:** `24px`.

### Inputs / Fields
- **Style:** fundo Papel Cartão, borda hairline `1px`, radius `3px`, padding `12px 16px`.
- **Focus:** borda muda para Tinta de Revisão, sem glow/sombra.
- **Error:** borda vermelha mais texto de erro em Body type, cor Tinta de Revisão.

### Navigation
- **Style:** barra superior simples, fundo Papel, hairline inferior. Links em Label type (uppercase, tracking), estado ativo sublinhado em Tinta de Revisão. Mobile: mesma barra, sem colapsar em hambúrguer dado o baixo número de páginas (3).

## Do's and Don'ts

### Do:
- **Do** manter o vermelho-tinta como único acento cromático em toda a aplicação.
- **Do** usar hairlines para toda separação estrutural, nunca sombra.
- **Do** tratar o nome do filme como manchete — sempre em Fraunces, sempre a maior peça de texto da ficha.

### Don't:
- **Don't** usar cantos muito arredondados ou pill-shape em nenhum componente.
- **Don't** usar `box-shadow` decorativo em cards, botões ou inputs.
- **Don't** introduzir uma segunda cor de acento (paleta fica em neutros + Tinta de Revisão).
