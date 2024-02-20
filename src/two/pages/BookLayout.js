import { Link, Outlet } from "react-router-dom";


export function BookLayout(){
return(<>   
    <Link to="/books/1" className="text-[red]">Book1</Link>
    <br></br>
    <Link to="/books/2" className="text-[red]">Book2</Link>
    <br></br>
    <Link to="/books/new" className="text-[red]">NewBook</Link>
    <Outlet context={{key :"ra babu"}}/>
    </>) 
}