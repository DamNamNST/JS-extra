import Navigo from 'navigo';
import AboutPage from './pages/about';
import DetailPage from './pages/detail-post';
import HomePage from './pages/home';
import NewsPage from './pages/new';



const router = new Navigo('/',{ linksSelector: 'a'});

const print = (content, id) => {
  document.querySelector("#app").innerHTML = content.render(id);

}
router.on({
  '/': ()=> print(HomePage),
  '/news': ()=> print(NewsPage),
  '/news/:id': (id)=> print(DetailPage, id.data.id),
  '/about': ()=> print(AboutPage),

})
router.resolve();