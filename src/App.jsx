import Header from "./shared/Header"
import Main from "./components/Main"
import Footer from "./shared/Footer"
import Blog from "./components/Blog"
import Musica from "./components/Blogposts/Musica"
import{Route,Routes} from 'react-router-dom'
import ContactMe from "./components/Contact"
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='*' element={<h1>404</h1>}/>
        <Route path='/musica' element={<Musica/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
