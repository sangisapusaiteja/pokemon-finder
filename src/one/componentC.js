import { useSelector } from "react-redux"

function ComponentC(props){
    const count=useSelector((state)=>state.counter.value)
    return(
        <div className=" bg-black p-10 text-white">
            <div>Component C</div>
            <div>i am bellow of c</div>
            <div> i am from component c and the redux variable is {count}</div>
            <br></br>
            <div> the count in component A is {props.Count}</div>
        </div>
    )

}
export default ComponentC