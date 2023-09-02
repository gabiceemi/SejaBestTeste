# Projeto SejaBestTeste - Backend

Este é um projeto de backend desenvolvido como parte do teste para uma vaga de backend na empresa SejaBest. O projeto utiliza TypeScript, Node.js e Express.js para fornecer as seguintes funcionalidades:

## Funcionalidades

1. Cadastro de Pessoa:
   - Permite o cadastro de informações de uma pessoa, incluindo nome, sobrenome e outros detalhes relevantes.

2. Consulta de Pessoa:
   - Permite consultar as informações de uma pessoa com base em um identificador único.

3. Criação de Fone:
   - Permite adicionar números de telefone (fones) associados a uma pessoa.

4. Consulta de Fone:
   - Permite consultar os números de telefone associados a uma pessoa.

5. Verificação de Celular:
   - Fornece a capacidade de verificar se um número de telefone é um número de celular.

## Tecnologias Utilizadas

- TypeScript
- Node.js
- Express.js
- Docker

## Testes

O projeto inclui testes automatizados usando a estrutura de teste Jest. Os testes foram criados para verificar o funcionamento correto das funcionalidades mencionadas acima. Para executar os testes, siga os passos abaixo:

## Como Iniciar

Para iniciar o projeto localmente, siga estas etapadas:

1. Clone este repositório:

   ```bash
   git clone https://github.com/gabiceemi/SejaBestTeste.git

2. Instale as dependências:

   ```bash
   npm install
   
3. Inicie o servidor:

   ```bash
   docker-compose up

4. Para fazer as migrações das tabelas:

   ```bash
   npm run typeorm migration:run
   
5. O servidor estará em execução em http://localhost:3000

6. Execute os testes com o seguinte comando:

   ```bash
   npm run test
