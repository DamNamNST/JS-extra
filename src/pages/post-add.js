import { add } from "../api/news"
import Footer from "../components/Footer"
import Header from "../components/Header"

const AddNewPost = {
  render() {
    return /*html*/`
      <header>
                ${Header.render()}
      </header>
      <main>
      <div class="py-12">
        <h2 class="text-2xl font-bold">Add New Post</h2>
        <div class="mt-8 max-w-md">
          <div class="grid grid-cols-1 gap-6">
            <form action="" id="add-new" class="form-control">
              <input
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="title"
                id="title"
              />
              <input
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="content"
                id="content"
              />
              <input
                type="text"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="image"
                id="image"
              />
              <button class="bg-blue-600 text-white px-8 py-2">Add New</button>
            </form>
          </div>
        </div>
      </div>
    </main>
      <footer>
        ${Footer.render()}
      </footer>
    `
  },
  afterRender() {
    document.querySelector("#add-new").addEventListener("submit", (e) => {
      e.preventDefault()
      const post = {
        title: document.querySelector('#title').value,
        content: document.querySelector('#content').value,
        image: document.querySelector('#image').value,
      }
      console.log(post);
      add(post)
      
    })
  }
}
export default AddNewPost