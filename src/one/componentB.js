import ComponentC from "./componentC"
function ComponentB(props){
    console.log("props in component B is ",props)
    return(
        <div className=" bg-[grey] p-10 text-black">
            <div className=" bg-white p-10 text-black" >Component B</div>
            <br></br>
            <div className=" bg-white p-10 text-black"><ComponentC Count={props.Count}/></div>
        </div>
    )

}
export default ComponentB