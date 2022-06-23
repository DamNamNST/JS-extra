import Navigo from 'navigo';
import AboutPage from './pages/about';
import DetailPage from './pages/detail-post';
import HomePage from './pages/home';
import NewsPage from './pages/new';
import AddNewPost from './pages/post-add';
import ManageNewsPost from './pages/post-manage';
import UpdateNewPost from './pages/post-update';



const router = new Navigo('/',{ linksSelector: 'a'});

const print = async (content, id) => {
  document.querySelector("#app").innerHTML = await content.render(id);
  if (content.afterRender) {
    content.afterRender(id)
  }
}
router.on({
  '/': ()=> print(HomePage),
  '/news': ()=> print(NewsPage),
  '/news/:id': (id)=> print(DetailPage, id.data.id),
  '/about': ()=> print(AboutPage),
  '/admin/post/add': ()=> {print(AddNewPost)},
  '/admin/post/:id/update': (value)=> {print(UpdateNewPost, value.data.id)},
  '/admin/post': ()=> {print(ManageNewsPost)},
})
router.resolve();