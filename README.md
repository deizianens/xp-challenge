# Front-end Challenge

## Sobre o teste

O desafio utiliza as API’s do Spotify. Features:

- Possibilidade de inserir o nome da música ou album e obter uma lista;
- Caso um album seja procurado e retornado, quando selecionado o album, usuário será direcionado a lista de música desse album.
- Tocar o preview da música.

### Sobre o projeto

- Projeto feito com React;
- Não faz uso de nenhum CSS Framework (Bootstrap, PureCss, etc.);
- Para rodar a aplicação faça: **yarn/npm** start;
- A aplicação deve solicitar o token que será utilizado para realizar as requisições para a API;
- Persistencia do **TOKEN**, quando expirado solicitar o token novo;
- Testes escritos com _react testing library e jest_
- A aplicação passará por 3 ambientes, DSV - HML - PRD, com build e uso variaveis de ambiente.

### Visual & Funcionalidades

Quando o usuário entrar na aplicação ele deve poder buscar por um album ou música. Quando realizar a busca ele deve conseguir ver todos os albuns do artista e pode interagir indo para a página do album, utilizando a url **/albums/{artist}**, por exemplo: **/albums/mc-kevinho**. Ele deve conseguir voltar para essa página com o resultado da busca atual.

Quando estiver em uma tela de album ele deve ver as musicas e conseguir ouvir uma prévia da música que ele escolher, caso ele pause a música deve continuar de onde parou. O usuário tem um feedback para mostrar qual música está tocando.

### Tela principal

![](https://github.com/rodyrafa/challenge/raw/master/imgs/home_1.jpg)

![](https://github.com/rodyrafa/challenge/raw/master/imgs/home_2.jpg)

### Tela de album

![](https://github.com/rodyrafa/challenge/raw/master/imgs/list.jpg)

### Guide

![](https://github.com/rodyrafa/challenge/raw/master/imgs/guide.jpg)

## Api

A aplicação deverá aceitar um TOKEN que o usuário passará para sua aplicação.

O link da documentação da API é:

https://developer.spotify.com/web-api/endpoint-reference/
