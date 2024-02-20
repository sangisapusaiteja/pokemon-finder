import React,{useState,useEffect} from "react"
export default function Task7() {
    const [WindowWidth, setwindowWidth] = useState(window.innerWidth)
    const handleResize = () => {
        setwindowWidth(window.innerWidth) 
        }
        useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
        window. removeEventListener('resize', handleResize)
        }
        }, [])
        return (
    <div className="m-10 text-center">{WindowWidth} </div>
    )
}





