import { Router } from './router.js'

// criar uma const (objeto) com propriedade e valor para mostrar as rotas das páginas

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

// const routes = { // a propriedade deve estar em "" pois não pode iniciar com /
//     "/": "/pages/home.html",
//     "/about": "/pages/about.html",
//     "/contact": "/pages/contact.html",
//     404: "/pages/404.html",
//   }
  
router.handle()
  
      //função para voltar a pagina clicada anteriormente através da seta do browser
window.onpopstate = () => router.handle()

window.route = () => router.route()

//Todas as funções dentro de uma classe é chamada de método
// Todas as váriaveis dentro de uma classe é chamada de atributo