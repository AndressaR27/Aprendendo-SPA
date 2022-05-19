export class Router {

  routes = {}
    
    //Não precisa colocar a palavra function dentro dessa classe de objeto
   

    add(routeName, page){ //routName é a propriedade e page é o valor//
        this.routes[routeName] = page
    }

    route(event) {
    event = event || window.event
    event.preventDefault() // evento para mudar o comportamento padrão (onclick tem comp padrão de mudar para outra página)
    //Após mudar o comp padrão é necessário falar pra onde ir, se não no onclick ele permanece na mesma página.
    window.history.pushState({}, "", event.target.href)

    //Dentro da classe, sempre que quiser usar uma função ou uma propriedade precisa usar o THIS, que é uma referencia a algo dentro do par de chaves
    this.handle()
  }

   handle(){
    // const pathname = window.location.pathname - forma comum
    const { pathname } = window.location // forma desestruturada. 
    // pode ser usada para pegar diversos valores no window location
    // Ex const { pathname, host, port, href } = window.location
    const route = this.routes[pathname] || this.routes [404]
    //função para ir buscar a rota (assincrona):
    fetch(route)
    .then(data => data.text())
    .then(html => {document.querySelector('#app').innerHTML = html})
  }


}

const router = new Router()// cria uma instância (fotografia) do objeto Router e coloca na const

// Outra forma de exportar // export default new Router()