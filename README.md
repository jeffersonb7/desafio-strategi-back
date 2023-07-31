# Desafio Strategi (BACK)

### O problema

Desenvolva uma pequena aplicação web de venda de imóveis onde um vendedor faz o login na aplicação, escolhe o imóvel(Apartamento ou Lote) na tela de seleção devem aparecer a localização do imóvel(endereço), valor de venda, valor de comissão do vendedor(5%) e qualquer outra informação que você queria colocar na tela, realiza a simulação de pagamento do imóvel (à vista ou 180 parcelas), escolhe o cliente que a venda será realizada e na tela final apresenta um resumo(extrato do financiamento) de toda a transação: Quem foi o vendedor, qual foi o imóvel, para quem foi vendido o imóvel e as condições de pagamento e extrato.

### Para rodar o projeto

Clone o baixe o repositório, após acesse a pasta do projeto.

Configurar env.sample

```
    DATABASE_URL="postgresql://postgres:postgres_senha@localhost:5432/banco?schema=public"
    PORT=
    SECRET=
```

Execute oo comando abaixo, para baixar as dependências do projeto: 

```bash
    npm install
```

```bash
    npx prisma migrate dev
```

```bash
    npm run dev
```

O projeto execurá na rota PORT: [http://localhost:PORT](http://localhost:PORT)

Arquivo com Json, gerado pelo postman [http_json](http_json/Strategi.postman_collection.json):

### Tecnologias utilizadas
- [Nodejs](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [PrismaORM](https://www.prisma.io/)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)