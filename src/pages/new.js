import Footer from "../components/Footer"
import Header from "../components/Header"
import newsList from "../data"

const NewsPage = {
    async render() {
        const data = await (await fetch(`https://60371dc45435040017721a02.mockapi.io/products`)).json()
        return /*html*/`
        <header>
            ${Header.render()}
        </header>
        <main>
            <section class="grid grid-cols-3 gap-8">
                ${data.map(function (post) {
            return `
                        <div class="m-auto my-4">
                          <a href="/news/${post.id}"><img src="${post.image}" alt="" class="m-auto"/></a>
                          <a href="/news/${post.id}"><h1>${post.title}</h1></a>
                          <p>${post.content}</p>
                        </div>
                        `
        }).join("")
            }
                
            </section>
        </main>
        <footer>
            ${Footer.render()}
        </footer>
      
      `
    }
}
export default NewsPage