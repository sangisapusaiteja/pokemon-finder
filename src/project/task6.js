import React,{useState,useEffect} from "react"
export default function Task7() {
    const [resourceType, setResourceType] = useState( '')
    const [items, setItems] = useState([])
    useEffect(() => {
    fetch( `https://jsonplaceholder.typicode.com/${resourceType}` )
    .then(response => response. json())
    .then(json => setItems(json))
    }, [resourceType])
    
    return (
    <>
    <div>
    <button onClick={() => setResourceType('posts')} className="bg-[pink] p-5 m-2">Posts</button>
    <button onClick={() => setResourceType('users')}className="bg-[pink] p-5 m-2">Users</button>
    <button onClick={() => setResourceType('comments') }className="bg-[pink] p-5 m-2">Comments</button>
    </div>
    <h1 className="text-3xl p-10">{resourceType}</h1>
    {items.map(item => {
    return <pre>{JSON.stringify(item)}</pre>
    })}
    </>
    )
}