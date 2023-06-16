# Backend API - Receitas de Culinária

Esse projeto é uma API web simples para armazenar e exibir receitas culinárias. Os usuários podem enviar detalhes sobre suas receitas por meio de solicitações POST e as receitas enviadas são exibidas em uma página HTML para visualização e referência.

## Funcionalidades

- Aceita solicitações POST com os detalhes da receita, como nome, ingredientes, modo de preparo, dificuldade, autor e data.
- Exibe os detalhes da receita em uma página HTML após o envio da solicitação POST.

## Tecnologias Utilizadas

- Node.js
- Express.js
- EJS (Embedded JavaScript) - para renderizar as páginas HTML
- Body-parser - para processar os dados enviados via solicitação POST

## Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes npm ou yarn

## Como executar o projeto

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório raiz do projeto.
3. Instale as dependências do projeto executando o comando `npm install`.
4. Inicie o servidor executando o comando `npm start`.
5. Acesse o aplicativo no seu navegador em `http://localhost:3000`.

## Como usar

1. Na página inicial (`http://localhost:3000`), você verá uma mensagem de boas-vindas.
2. Use uma ferramenta de API, como o Postman, para enviar uma solicitação POST para `http://localhost:3000/dados` com os seguintes dados no corpo da solicitação:
   - `nome`: Nome da receita
   - `ingredientes`: Ingredientes da receita
   - `modoPreparo`: Modo de preparo da receita
   - `dificuldade`: Dificuldade da receita
   - `autor`: Autor da receita
   - `data`: Data da receita
3. Após enviar a solicitação POST, você receberá uma resposta com os detalhes da receita em uma página HTML.
4. Para enviar uma nova receita, repita os passos 2-3.

## Dupla
- **Rafael Vasconcelos ([@rafael-vas](https://github.com/rafael-vas))**
- **Wesley Vinícius ([@Wesley-Vini](https://github.com/Wesley-Vini))**
