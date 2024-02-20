import { useSelector } from "react-redux"

function ComponentD(props){
    const count=useSelector((state)=>state.counter.value)
    return(
        
        <div>
            <div>i am from componrnt D</div>
            <div>i nmeed to print count variable {count}</div>
        </div>
    )

}
export default ComponentD