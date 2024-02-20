import { useOutletContext, useParams } from "react-router-dom"

export function Book(){
  const {id} =useParams()
  const obj =useOutletContext()
    return (<h1 className="text-[purple]">
        Book {id} {obj.key}</h1>)
}