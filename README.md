## Funcionalidades

### Busca de Usuário:

- Permite pesquisar por nome de usuário no GitHub.
- Exibe a foto, nome, login e localização do usuário.

### Detalhes do Perfil:

- Ao clicar na foto do perfil, abre um modal com dados detalhados fornecidos pela API do GitHub.
- Informações exibidas incluem: foto, nome, login, localização, ID, quantidade de seguidores, quantidade de repositórios públicos, e uma lista completa de repositórios.
- Para cada repositório, são mostrados o nome, a linguagem utilizada, a descrição, a data de criação e a data do último push.

### Redirecionamento para Repositório:

- Permite que ao clicar em um repositório na lista, o usuário seja redirecionado para a página do repositório no GitHub.

### Histórico de Busca:

- Mantém um menu com todos os usuários pesquisados recentemente.
- O menu segue o padrão das informações exibidas na busca principal e permite visualizar detalhes semelhantes aos da tarefa 2.

## Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Styled-Components, Material-UI, Framer Motion
- **Backend:** Não aplicável (aplicativo client-side)
- **Outras Tecnologias:** Axios para requisições HTTP, localStorage para armazenamento de histórico de buscas

## Requisitos

- **Node.js:** 14.x ou superior
- **npm:** 6.x ou superior

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/lucasscabral/desafio-frontweb-clicksoft.git
   ```

2. Navegue para o diretório do projeto:

   ```bash
   cd desafio-frontweb-clicksoft
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

2. Acesse o aplicativo no seu navegador em [http://http://localhost:5173/](http://http://localhost:5173/).
