import Header from "./shared/Header"
import Main from "./components/Main"
import Footer from "./shared/Footer"
import Blog from "./components/Blog"
import{Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
