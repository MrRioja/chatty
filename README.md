# Chatty APP

<p align="center">
  <img src="https://img.shields.io/static/v1?label=chatty&message=app&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/chatty?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/chatty?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/chatty?color=blueviolet&style=for-the-badge">
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#chatty">Chatty</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Projeto desenvolvido durante a NLW V, evento criado pela Rocketseat. Um evento 100% online e GRATUITO, com conteúdo exclusivo e INÉDITO.

Ocorreu do dia 19 a 25 de Abril de 2021 e teve como intuito mostrar na prática o poder do NodeJS para construção de backends complexos e de alto nível.

<img src="./.github/wallpaper.jpg" alt="Wallpaper" />

## Chatty

O Chatty é uma aplicação web de chat para atendimento ao cliente em tempo real.

A aplicação funciona como um chat web aonde os clientes entram em contato com os administradores a fim de sanar duvidas, conceder feedbacks, fazer elogios e etc.

Vamos conhecer abaixo a aplicação da perspectiva dos clientes e dos administradores, respectivamente.

### Visualização - Cliente

Assim que o usuário acessa a página destinada à ele, irá se deparar com a tela abaixo. A tela não possui nada além do botão de suporte pois o propósito aqui é o chat de interação entre clientes e fornecedores.

![Cliente - Home](client-home.png)

Ao clicar no botão flutuante `Suporte`, a janela de criação de chat será exibida. É nela onde o usuário informará seu e-mail para identificação e deixará sua mensagem para os responsáveis:

![Cliente - Criação do Chat](client-chat-opened.png)

Após informar os dados solicitados e iniciar o chat, a visualização da página será a seguinte:

![Cliente - Chat iniciado](client-chatting.png)

Conforme visto acima, a mensagem já foi enviada e o chat criado, basta aguardar uma resposta de um dos administradores para iniciarem uma conversa síncrona, como podemos ver abaixo o usuário sendo respondido e recebendo a resposta em tempo real:

![Cliente - Mensagem respondida](client-response.png)

Veremos esse fluxo acontecendo desde o inicio no final do tópico da aplicação onde deixarei um GIF da aplicação em funcionamento.

### Visualização - Admin

Aos administradores, a homepage de gestão dos chats é basicamente uma lista com os atendimentos pendentes e o email do usuário de cada uma das solicitações:

![Admin - Lista de chats](admin-chats-list.png)

Após clicar no botão `Entrar em atendimento`, a mensagem enviada pelo usuário em questão será exibida e eles poderão conversar a respeito do assunto iniciado pelo cliente:

![Admin - Chat](admin-chatting.png)

Para ilustrar o fluxo da aplicação como um todo, deixo o GIF abaixo aonde navego por todas as partes da aplicação com a finalidade de demonstrar seu funcionamento:

> ℹ A tela da esquerda é o CLIENTE e a da direita a tela do ADMINISTRADOR.

![Demonstração](.github/demo.gif)

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/chatty.git

# Acesse a pasta do projeto no terminal/cmd
$ cd chatty

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute as migrations
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# Acessar o frontend como Cliente através desse URL:
# http://localhost:3333/pages/client
# Acessar o frontend como Administrador através desse URL:
# http://localhost:3333/pages/admin

# A API iniciará na porta 3333 - acesse <http://localhost:3333>
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="75"/>

<img align="left" src="https://pandaprogrammer.com/wp-content/uploads/2021/11/watermark.png" alt="HTML, CSS, Javascript logo" height="75" />

<br><br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
