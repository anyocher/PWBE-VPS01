# prova pwbe 
## 🚗 Alugueis de veiculos 🚗
Sistema de exemplo de API com testes utilizando o Insomnia

## Temas de aprendizado
- Banco de dados (MySQL)
- API (NodeJS)
- CRUD (NodeJS)
- MVC (NodeJS)
- Testes (Insomnia)

## Como testar esta API
Necessário ter o ambiente/tecnologias acima instaladas
- 1 Clonar este repositório
- 2 Abrir com VsCode
- 3 Instalar o banco de dados
    - A Abrir o XAMPP e clicar em start no MySQL, ou iniciar o MySQL da maneira que preferir.
    - B Rodar os scripts de criação do Banco de dados e de população com dados de teste.
        - ./bd/script.sql
        - ./testes/testes.sql
- 4 Abrir um terminal **cmd** ou **bash** e navegar até a pasta ./api
```bash
cd api
```
- 5 Instalar as dependências do NodeJS
```bash
npm install
```
- 6 Executar com nodemon ou node server.js
```bash
nodemon
```
ou
```bash
npx nodemon
```
ou
```bash
node server.js
```
- 7 Abrir o aplicativo **Insomnia** e importar a coleção de rotas de testes que está na pasta ./testes/insomnia.json
- 8 Executar todos os testes
