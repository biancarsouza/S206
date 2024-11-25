
# Lista API

Este repositório contém uma coleção de testes feita no Postman para a API [JSONPlaceholder](https://jsonplaceholder.typicode.com). A coleção valida diferentes cenários de requisições HTTP, incluindo casos positivos e negativos.


### O que está incluso
- Coleção de testes do Postman, um arquivo .json exportado com as requisições.
- Ambiente do Postman, um arquivo .json configurado com uma variável de ambiente (URL base da API).
- Arquivo com as respostas do exercício 2, parte teórica.


### Como usar este repositório

#### Requisitos:
- Conta no Postman Web ou a aplicação instalada no seu computador.
- Git para clonar o repositório ou acesso direto ao GitHub.

#### 1. Clone o Repositório
``` git bash
git clone https://github.com/biancarsouza/S206.git
cd S206
```

#### 2. Importe os arquivos no Postman
- Abra o Postman.
- Vá até File > Import (ou clique em Import no canto superior esquerdo).
- Selecione o arquivo da coleção (JSONPlaceholder_Collection.json) e o arquivo do ambiente (JSONPlaceholder_Environment.json).
- Confirme a importação.


### Configuração da Coleção
A coleção utiliza variáveis de ambiente para facilitar a manutenção e a execução dos testes. Certifique-se de que o ambiente "Lista 2" está ativo antes de executar as requisições.

- URL: URL base da API (https://jsonplaceholder.typicode.com/).


### Cenários de Teste

- GET /posts: retorna todos os posts, esperado 200 OK.
- GET /posts/9: retorna apenas o post com id 9, esperado 200 OK.
- GET /posts/7/comments: retorna os comentários do post com id 7, esperado 200 OK.
- GET /posts/1/commets: tenta buscar um endpoint inexistente, esperado 404 not found.
- GET /posts/999: tenta buscar um post cujo id não existe, esperado 404 not found.
- DELETE /posts/1: deleta o post com id 1, esperado 200 OK.
- POST /posts: cria um post com id 101, esperado 201 created.
- PUT /posts/1: atualiza os dados do post com id 1, esperado 200 OK.


### Como executar os testes

- No Postman, certifique-se de que o ambiente JSONPlaceholder Environment está ativo.
- Abra a coleção JSONPlaceholder Tests.
- Execute os testes manualmente ou utilize a funcionalidade de Runner para executar todos os testes de uma vez.


### Estrutura do repositório

``` git bash
├── README.md                           # Documentação do repositório  
├── Lista 2.postman_collection.json     # Coleção de testes Postman  
├── Lista 2.postman_environment.json    # Ambiente configurado no Postman 
├── Exercício 2.txt                     # Repostas do exercício 2
```