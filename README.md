# 🧙‍♂️ RPG API – Gerenciador de Personagens e Itens Mágicos

API RESTful desenvolvida em **Node.js**, **Express** e **MongoDB** para gerenciamento de personagens e seus itens mágicos em um jogo de RPG.
- RODRIGO YAEDU PINESSO
- RA: 22014201-2
- ESOFT 7B

---

## 🧰 Tecnologias utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- nodemon
- Insomnia

---

## ⚙️ Instalação e uso

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/rpg-api.git
cd rpg-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o arquivo `.env`:

```env
MONGO_URI=mongodb://localhost:27017/rpg
PORT=3000
```

4. Inicie o servidor:

```bash
npm run dev
```

---

## 📬 Endpoints principais

### Personagens

| Método | Rota                                 | Descrição |
|--------|--------------------------------------|-----------|
| POST   | `/personagens`                       | Criar personagem |
| GET    | `/personagens`                       | Listar todos |
| GET    | `/personagens/:id`                   | Buscar por ID |
| PATCH  | `/personagens/:id/nomeAventureiro`   | Atualizar nome de aventura |
| DELETE | `/personagens/:id`                   | Deletar personagem |
| POST   | `/personagens/:personagemId/itens/:itemId` | Atribuir item mágico |
| GET    | `/personagens/:id/itens`             | Listar itens de um personagem |
| GET    | `/personagens/:id/amuleto`           | Buscar amuleto do personagem |
| DELETE | `/personagens/:personagemId/itens/:itemId` | Remover item do personagem |

### Itens Mágicos

| Método | Rota              | Descrição |
|--------|-------------------|-----------|
| POST   | `/itens`          | Criar item mágico |
| GET    | `/itens`          | Listar todos os itens |
| GET    | `/itens/:id`      | Buscar item por ID |
