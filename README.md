# Musify - Spotify Clone

Esse projeto é um clone do spotify __totalmente responsivo__, feito com nextjs + tailwind no front-end, e uma rest-api contruida com express


Clique aqui para ver o projeto em ação! => [Live Preview](https://fullstack-project-two.vercel.app/)

<p align="center">
  <img src="https://i.imgur.com/x0zxQZl.png" width="600" alt="project pic">
</p>

<p align="center">
  <img src="https://i.imgur.com/5NaSL3w.png"  height="400" alt="project pic">
</p>

## Tecnologias usadas

- Docker Compose
- Typescript
- Next JS e React
- React Context API
- Node com Express back end
- Autenticação JWT
- Banco de dados Mysql com Sequelize de ORM

## Estrutura 
O projeto tem duas partes:

- Front End: NextJs

- Backend: API construida com Express

Todos os dados do banco são operados no backend e conseguimos acessa-los por meio de requisições http feita na aplicação NextJs

## Deploy

Inicialmente foi planejado fazer o deploy da aplicação completa no AWS EC2. Porem, a aplicação passaria o limites de memória do free tier do serviço. Então foi abordada a seguinte solução:

1. Um arquivo Docker.compose para o ambiente de produção  onde é criado o servidor do backend do projeto e seu banco de dados mysql. Esses containers foram hospedados no AWS EC2
2. Para o frontend do projeto, optei por usar o Vercel que faz parte do ecossistema Next.js


## Instalação com docker:

Será necessaŕio ter o Docker e o DockerCompose instalado na sua máquina.

Link para instalção Windows e Mac https://www.docker.com/products/docker-desktop/. O Docker compose ja vem instalado com windows e mac. No linux confira se você ja tem a ultima versão do DockerCompose https://docs.docker.com/compose/install/ 

1. Para executar a aplicação em modo de desenvolvimento certifique-se que está no diretorio inicial do projeto e rode:  `docker-compose build --no-cache` para construir a imagem e depois `docker-compose up` para executar os containers


## Rotas de Api do Backend

| Endpoint      | Descrição   |
| ------------- | ------------- |
| `GET /status` | HealthCheck da API |
| `GET /albums` | Obtenha todos os albums |
| `GET /albums/search` | Pesquisar albums por nome |
| `GET /albums/:albumId` | Obtenha um album pelo seu Id |
|`GET /artists` | Obtenha todos os artistas |
| `GET /artists/search` | Pesquisar artistas por nome |
| `GET /artists/:albumId` | Obtenha um artista pelo seu Id |
| `GET /genres` | Obtenha todos os generos musicais |
|`GET /tracks/:trackId` | Obtenha uma faixa por Id |
| `GET /albums/:albumId/tracks` | Obtenha todas as faixas de um album |
| `POST /signup` | Realize o registro de usuário|
| `POST /login` | Realize o login de usuário, gerando também seu JWT |
| `POST /likes/:entityType/:entityId` | Crie uma nova instacia de curtida de um artista ou album |
| `GET /likes/artists` | Obtenha todas as curtidas de artistas do usuário autenticado |
| `GET /likes/:albums` | Obtenha todas as curtidas de albums do usuário autenticado |

## Testes 

### API

Primeiro precisamos entrar no shell do docker`docker-compose exec fullstack-project-backend-1 sh`, e depois podemos rodar o comando de test `npm run test`.

Os testes são realizados num banco de dados diferente do de desenvolvimento, garantindo a segurança dos dados.

## Autenticação com JWT 

Quando o usuário faz o login, é feito uma requesição HTTP pro backend e ele devolve um token JWT que é salvo no localstorage do navegador. Na aplicação temos algumas rotas autenticadas que precisa do Token para ser acessadas