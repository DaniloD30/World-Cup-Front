# Movie World Cup

- [Introdução](#st1)
- [A Aplicação](#st2)
- [Executando a Aplicação](#st3)
 - [Iniciando a Aplicação](#st4)
 - [Configurando variáveis de ambiente](#st5)
 - [Link da Aplicação](#st6)
<div id='st1' />

## Introdução

Aplicação web (single page app) para realização da copa do mundo de filmes.

<div id='st2' />

## A Aplicação

A aplicação foi desenvolvida em javascript, utilizando :
- [React](https://pt-br.reactjs.org/) ( [Hooks](https://react-redux.js.org/next/api/hooks) e [Redux](https://github.com/reduxjs/redux-thunk) )
- [Material UI](https://material-ui.com/pt/)
- [Jest](https://jestjs.io/docs/en/tutorial-react)
- [Heroku](https://www.heroku.com/what) (deploy contínuo)
- [Arquitetura](https://www.treinaweb.com.br/blog/flux-descubra-o-motivo-do-sucesso-dessa-arquitetura-em-grandes-empresas/) 
- [Flux](https://www.treinaweb.com.br/blog/flux-descubra-o-motivo-do-sucesso-dessa-arquitetura-em-grandes-empresas/)



<div id='st3' />

## Executando a Aplicação

```sh
  git clone https://github.com/DaniloD30/World-Cup-Front
```
```sh
  cd World-Cup-Front
```
```sh
   yarn/npm i
```
<div id='st4' />

Crie um arquivo .env e coloque os valores abaixo.
```sh
REACT_APP_API_URL=https://worldcupmovie.herokuapp.com/api/
```
<div id='st5' />
Ao final,

```sh
  yarn/npm start
```
<div id='st6' />

# Link da Aplicação

A Aplicação está disponível no Heroku atráves deste [Link](https://world-cup-movie-front.herokuapp.com/).
