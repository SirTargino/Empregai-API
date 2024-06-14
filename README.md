<div align="center">
    <h3>Empregaí - API</h3>
</div>

<hr>
<h3 align="center">Status do projeto: em andamento ⌛</h3>
<hr>

<h3 align="center">Sobre o projeto:</h3>

<p>•A API Empregaí é uma aplicação backend web voltada para facilitar a busca por empregos na área de tecnologia. Por meio dela, é possivel cadastrar e também buscar vagas, bem como registrar-se como um candidato que pode ser encontrado por empresas 👨🏽‍💻</p>

<hr>

<h3 align="center">Tecnologias Utilizadas:</h3>

<h3>Back-End: </h3>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white&color=%232b5060)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white&color=%232b5060)

<h3>Banco de Dados: </h3>

![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white&color=%232b5060)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white&color=%232b5060)

<hr>


<h3 align="center">Rodando localmente:</h3>

Clone o repositório em sua máquina: 

```bash
  git clone https://github.com/SirTargino/Empregai-API
```

Acesse o diretório do projeto:

```bash
  cd Empregai-API
```

Crie um arquivo **.env** seguindo o modelo do arquivo **.env.example**:

```bash
#.env
MYSQL_ROOT_PASSWORD=
MYSQL_USER=
MYSQL_PASSWORD=
```

Após isso, certifique de ter o **Docker** instalado e rodando em sua máquina.

Se tudo estiver preparado, execute o comando:

```bash
docker compose -p docker_mysql -f docker-compose.yaml up -d
```

*Certifique-se de que nenhuma outra aplicação está usando a porta 3306 em sua máquina. 

Com o container funcionando, execute o comando:

```bash
node src/app.js
```
<h3 align="center">Documentação - API:</h3>

#### Registra uma nova vaga

```http
  POST /
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O título da vaga |
| `description`      | `string` | **Obrigatório**. A descrição da vaga |
| `company`      | `string` | **Obrigatório**. A empresa que oferece a vaga |
| `location`      | `string` | **Obrigatório**. A localização vaga |
| `salary`      | `number` | **Obrigatório**. O salário oferecido |

#### Retorna todas as vagas

```http
  GET /
```


#### Retorna a lista de vagas encontrados pelo nome

```http
  GET /search
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `searchKeyword`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Edita uma vaga

```http
  PUT /:jobID
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da vaga |
| `title`      | `string` | O título da vaga |
| `description`      | `string` | A descrição da vaga |
| `company`      | `string` | A empresa que oferece a vaga |
| `location`      | `string` | A localização vaga |
| `salary`      | `number` | O salário oferecido |

#### Deleta uma vaga

```http
  DELETE /:jobID
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID da vaga |



