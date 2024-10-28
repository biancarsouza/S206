## Pré-requisitos

- Node.js (v12 ou uma versão mais atualizada)
- npm (Node Package Manager)

## Instalação

Para instalar as dependências do projeto:

```bash
npm install
```

Para instalar Cypress e outras dependências:

```bash
npm install --save-dev cypress
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator cypress-multi-reporters
```

## Executando os testes

```bash
npm run test
```

### Executando os testes no Cypress Test Runner:

```bash
npx cypress open
```

## Relatórios de testes

Depois de executar `npm run test`, os relatórios serão gerados:

- Relatório JSON: `cypress/reports/mocha/*.json`
- Relatório HTML: `cypress/reports/mocha/report.html`


## Comandos úteis

- `npm run clean:reports`: Limpa e cria diretório de relatórios
- `npm run scripts`: Executas testes Cypress
- `npm run combine-reports`: Combina relatórios JSON
- `npm run generate-report`: Gera um relatório HTML a partir de um relatório combinado JSON
- `npm run test`: Executa uma suite de teste completa com relatório