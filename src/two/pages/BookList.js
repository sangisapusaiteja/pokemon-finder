import { Link } from "react-router-dom"

export function BookList(){

    return (
    <>
    <div  >
    <Link to="/books/1" >Book1</Link>
    <Link to="/books/2" >Book2</Link>
    <Link to="/books/new" >New Book</Link>
    </div>
    </>)
}