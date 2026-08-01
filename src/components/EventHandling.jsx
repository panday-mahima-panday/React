import "./EV.css";
export const EventHandling=()=>{
  const handleButtonClick=(event)=>{
    alert("hii  event handling")
  };
  return(
    <>

    <button onClick={handleButtonClick}>Click Me</button><br></br>
    
    <button onClick={(event)=>handleButtonClick(event)}>Click Me -2</button><br></br>
    <button onclick={()=>alert("welcome")}> Inline Array</button>
    </>
  )
}