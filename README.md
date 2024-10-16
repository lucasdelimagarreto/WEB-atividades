# Exercícios de Desenvolvimento Web 

<p>
    Exercícios desenvolvidos na matéria de Prgramação WEB do curso de Ciência da Computação.
</p>

### Questão 1: Estruturação Semântica e Estilização com Display Inline

- Crie uma página simples que contenha um cabeçalho (header), uma seção principal (main) e um rodapé (footer). Dentro da seção principal, adicione três parágrafos com algum texto de exemplo.
- Utilize as tags semânticas <header>, <main>, e <footer> para estruturar a página.
- No CSS, estilize os parágrafos dentro da seção principal para que eles sejam exibidos na mesma linha, utilizando a propriedade display: inline.
- Aplique uma cor de fundo, uma cor de texto, e adicione uma borda arredondada nos parágrafos.
- Defina uma margem de 10 pixels e um padding de 5 pixels entre os parágrafos.
- Estilize o cabeçalho e o rodapé para que tenham um fundo diferente do restante da página, centralize o texto e adicione espaçamento interno (padding).

### Questão 2: Blocos em Linha e Unidades de Medida Relativas

- Crie uma página que contenha uma navegação (nav) com três links. Abaixo da navegação, adicione uma seção com duas caixas de texto lado a lado.
- Utilize a tag <nav> para a navegação e a tag <section> para a seção das caixas de texto.
- No CSS, estilize os links dentro da navegação para que fiquem em linha, utilizando display: inline-block, e defina uma largura de 20% da tela (vw) para cada link.
- Aplique uma cor de fundo, uma cor de texto, e adicione uma borda arredondada nos links.
- Estilize as duas caixas de texto na seção para que tenham display: inline-block, largura de 45%, e margem de 5% entre elas.
- Adicione uma cor de fundo, cor de texto, uma borda sólida, e sombra às caixas de texto.

### Questão 3

Seguindo esse padrão da primeira aula de css, tente estilizar o máximo esse site pessoal seu, imagine que está produzindo um blog. Utilize também o display flex para dimensionar os elementos.

![alt text](.github/image.png)

### Questão 4 

Adicione um fundo azul, com um card branco simulando perfis de usuários. Use o display flex e as propriedades vistas na sala, não necessariamente precisa ficar igual a imagem mas deixar de uma forma semelhante.

![alt text](.github/image2.png)

### Questão 5

Quando seria mais adequado utilizar CSS Grid em vez de display flex? Dê exemplos de layouts onde o Grid seria a melhor escolha.

Após sua pesquisa tente replicar esse layout abaixo utilizando grid

![alt text](.github/image3.png)

### Questão 6

Crie uma página web que permita ao usuário consultar um CEP através da API pública do ViaCEP. A página deve conter um card centralizado com um título "Consulta de CEP", um campo de input para o usuário digitar o CEP e um botão para realizar a consulta. Após a consulta, os dados retornados pela API (como logradouro, bairro, cidade, estado) devem ser exibidos em um texto abaixo do botão, com o título "Resultado".

- Requisitos:
    
    - Estrutura HTML:
    
        - Um título "Consulta de CEP".
        - Um campo de input para o usuário digitar o CEP.
        - Um botão para enviar a consulta.
        - Uma área abaixo do botão para exibir os resultados.
    
    - Estilização CSS:
    
        - O card deve ser centralizado na página e estilizado com uma cor de fundo e um espaçamento adequado.
        - A área de resultados deve ter um tamanho de fonte menor e ser organizada de maneira clara.
    
    - Lógica JavaScript:
    
        - Utilize fetch para realizar a requisição à API do ViaCEP (https://viacep.com.br/ws/{cep}/json/).
        - Use Promises (ou async/await) para gerenciar a chamada à API e o retorno dos dados.
        - Valide o CEP antes de enviar a requisição (certifique-se de que o CEP tem 8 dígitos).
        - Utilize template literals, let/const, e arrow functions para organizar o código.

### Questão 7

Criar um Componente de Contador com Efeitos Colaterais. O contator deve ser parecido com o timer e ir incrementando 1 a cada 1000 milissegundos. Criar um componente chamado Contador ou Counter

- Use o useState para manter o estado do contador.
- Use o useEffect para iniciar um intervalo que aumenta o contador a cada segundo (dica, use o setTimeout ou o setInterval junto).
- Adicione um botão para parar o contador, que deve limpar o intervalo.
- Exiba o valor atual do contador na tela.

### Questão 8

- Criação do Projeto
 - inicialize o projeto com npm init -y.
 - Instale o Express com o comando npm install express.
 - Instale o nodemon como dependência de desenvolvimento npm install -D nodemon.

- Estrutura do Código
 - Crie um arquivo chamado app.js e server.js.
 - Dentro desse arquivo, configure seu servidor Express para rodar em alguma porta local.
 - Defina um array inicial de animes com um objeto inicial (servirá como o nosso banco de dados em memória). Cada anime deve ter os seguintes atributos:
  - id: Número único ou UUID.
  - name: Nome do anime.
  - genre: Gênero do anime.
  - studio: Estúdio responsável pela produção do anime.

- Operações do CRUD
 - Realize essas operações, criar um anime, atualizar um anime por id, deletar um anime, listar todos os animes e listar um anime por id.

- Desafio Extra
 - Adicione validações para evitar que um anime seja criado ou atualizado com campos em branco.
 - Faça com que o ID do anime seja gerado automaticamente ao adicionar um novo anime.
