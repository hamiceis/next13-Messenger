# Clone do Messenger em Tempo Real: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher (2023)

![Copy of Copy of Fullstack Twitter Clone (1)](https://user-images.githubusercontent.com/23248726/236631198-90414da5-ee43-46a9-8898-70b003bcd83d.png)


Este é um repositório para um clone do Messenger em tempo real: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher.

[VIDEO TUTORIAL](https://www.youtube.com/watch?v=PGPGcKBpAk8)


Recursos Principais:

- Mensagens em tempo real usando Pusher
- Notificações e alertas de mensagens usando React-Toaster
- Design com Tailwind para uma interface elegante
- Animações e efeitos de transição com Tailwind
- Total responsividade para todos os dispositivos
- Autenticação de credenciais com NextAuth
- Integração de autenticação do Google
- Integração de autenticação do GitHub
- Envio de arquivos e imagens usando o CDN do Cloudinary
- Validação e manipulação de formulários do cliente usando react-hook-form
- Tratamento de erros no servidor com react-toast
- Recibos de leitura de mensagens
- Status de usuário online/offline
- Conversas em grupo e mensagens individuais
- Anexos de mensagens e compartilhamento de arquivos
- Personalização de perfil do usuário e configurações
- Como escrever rotas POST, GET e DELETE nos manipuladores de rotas (app/api)
- Como buscar dados nos componentes React do servidor, acessando diretamente o banco de dados (SEM API! Como mágica!)
- Tratamento de relações entre componentes do servidor e filhos em um ambiente em tempo real
- Criação e gerenciamento de salas e canais de chat

Aplicação desenvolvida pelo canal do Youtuber AntonioErdeljac 


### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/hamiceis/next13-messenger.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
