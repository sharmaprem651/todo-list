const TodoList = (props) => {
    return(
        <>
            <li id={props.id}>{props.itemVal} <span className="closeListItems" onClick={()=>{props.onClickBtn(props.id)}}>x</span></li>     
        </>
    )
}
   
export default TodoList;