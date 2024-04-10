# prova pwbe 
## 🚗 Alugueis de veiculos 🚗
Sistema de exemplo de API com testes utilizando o Insomnia

## Temas de aprendizado

- API - Criação de API (Plataforma de Interface de Aplicação)
- CRUD - Funcionalidades de Cadastro, consulta, alteração e exclusão
- MVC - Padrão de projeto (Modelo, Visão e Controle)
- Testes - Testes unitários da API utilizando software Insomnia
- 
## Para importar no Insomnia, siga estes passos:

1. Abra o Insomnia.
2. Vá para File > Import.
3. Selecione o arquivo insomnia.json deste repositório.
4. As rotas serão importadas e estarão disponíveis para teste .

## Como testar esta API
Necessário ter o ambiente/tecnologias acima instaladas
- 1 Clonar este repositório
- 2 Abrir com VsCode
- 3 Instalar o banco de dados
    - A Abrir o XAMPP e clicar em start no MySQL, ou iniciar o MySQL da maneira que preferir.
    - B Rodar os scripts de criação do Banco de dados e de população com dados de teste.
        -  ./bcd/script.sql
        -  ./testes/Insomnia.json

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
  ### Desafio
|Desafio|
|-|
|A partir do script de criação e população com dados de testes do banco de dados, Desenvolva as seguintes **funcionalidades**|
|CRUD de Clientes: Implementar operações CRUD (Create, Read, Update, Delete) para os Clientes|
|CRUD de Telefones: Implementar operações CRUD (Create, Read, Update, Delete) para os telefones|
|OBS: de preferência criar um CRUD para clientes com telefones juntos|
|CRUD de Veiculos: Implementar operações CRUD (Create, Read, Update, Delete) para os veiculos|
|CRUD de Aluguéis: Implementar operações CRUD (Create, Read, Update, Delete) para os aluguéis, neste crud, nas funcionalidades READ, acrescente uma rota que mostre somente os veículos reservados, outra que mostre os aluguados e uma que mostre o relatório completo de todos os aluguéis, utilizando as **views** do script SQL|
