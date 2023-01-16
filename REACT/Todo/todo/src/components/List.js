import React from "react"

 function DoneImg(props){

    if(props.done){
      return (<img alt="check" src="./check-1.png"></img>)
    } else {
      return (<img alt="off" src="./off.png"></img>)
    }
 }



function List(props){

    return (
        <ul>
          {props.items.map(item => <li className={item.done ? "done item" : "item"} key={item.id}>{item.text}
          <div>
          <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
          <button  onClick={()=>{props.onItemDeleted(item)}}><img alt="delete" src="./bin-1.png"></img></button>
          </div>
          </li>)}
        </ul>) 
}

export default List