import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {
  const [inputList, setInputList] = useState("")
  const [itemsList, setItemsList] =   useState([]);

  const itemEventHandler = (e) => {
    setInputList(e.target.value)
  }


  const listOfItems = () => {
    setItemsList((oldItems)=>{
      return [...oldItems, inputList]
    })
    setInputList("");
  }


  const  onClickHandler = (id) => {
    console.log("id is", id)
    setItemsList((oldArray)=>{
      return oldArray.filter((arraylist, index)=>{
        return index!==id;
      })
    });
  }

  
  return (
    <div className="App">
      <div className='todoListWrapper'>
        <h1>Todo List</h1>
        <form>
          <div className='formGroup'>
            <input type={'text'} value={inputList} placeholder="Add a Items" onChange={itemEventHandler}/>
            <button type='button' onClick={listOfItems}>+</button>
          </div>
          <ul className='todoLists'>
                {
                  itemsList.map((itemListVal, index)=>{
                      return <TodoList 
                              itemVal={itemListVal} 
                              id = {index}
                              key={index}
                              onClickBtn = {onClickHandler}
                              />
                  })
                }             
          </ul>   

        </form>
      </div>
    </div>
  );
}

export default App;
