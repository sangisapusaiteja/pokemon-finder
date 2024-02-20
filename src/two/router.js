import { Route, Routes,Link } from "react-router-dom"
import { Home } from "./pages/Home"
import { BookList } from "./pages/BookList"
import {Contact } from "./pages/Contact"
import { Book } from "./pages/Book"
import { NewBook } from "./pages/NewBook"
import { NotFound } from "./pages/NotFound"
import { BookLayout } from "./pages/BookLayout"
import { About } from "./pages/About"

function Router(){
  return (
  <>
    <Routes location={"/books"}>
    <Route path="/books" element={<h1> Extra Content</h1>}/>  
  </Routes>
  <nav>
    <ul>
 <Link to="/about">About</Link>
 <br/>
<Link to="/home">Home</Link>
<br/>
 <Link to="/books">Books</Link>
 <br/>
  <Link to="/contact">contact</Link>
</ul>
  </nav>
  
  <Routes >
  <Route path="/about" element={<About/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/books" element={<BookLayout/>} >
      <Route  element={<BookList/>}/>
      <Route path=":id" element={<Book/>}/>
      <Route path="new" element={<NewBook/>}/>
    </Route>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/" element={<NotFound/>}/>
  </Routes>
  
  
  </>
  )
}
export default Router