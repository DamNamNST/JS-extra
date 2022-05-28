import Footer from "../components/Footer"
import Header from "../components/Header"

const HomePage = {
  render(){
    return /* html */`
    <div>
      <header>
        ${Header.render()}
      </header>
      <main>
            
        </main>
      <footer>
      ${Footer.render()}
      </footer>
    </div>
    `
    
  }
}
export default HomePage