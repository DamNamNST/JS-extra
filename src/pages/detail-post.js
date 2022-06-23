import { get } from "../api/news"
import Footer from "../components/Footer"
import Header from "../components/Header"
import newsList from "../data"

const DetailPage = {
  async render(id) {
    const response = await get(id)
    const post = response.data

    return /*html*/`
            <header>
                ${Header.render()}
            </header>
            <main>
                <section class="m-auto">
                    <div class='m-auto'>
                        <img src="${post.image}" alt="" class="py-4" />
                        <h3>${post.title}</h3>
                        <p>${post.desc}</p>
                    </div>
                </section>
            </main>
            <footer>
                ${Footer.render()}
            </footer>
  `
  }
}
export default DetailPage
