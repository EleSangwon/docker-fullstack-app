import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {

  useEffect(() => {
    // here is, Get Value from Database .
    axios.get('/api/values')
      .then(response => {
        console.log('response',response)
        setLists(response.data)
      })

  }, [])
  const [lists, setLists] = useState([])
  const [value,setValue] = useState("")

  const changeHandler = (event) => {
    setValue(event.currentTarget.value)
  }

  const submitHandler=(event) => {
    event.preventDefault();
    axios.post('api/value',{value:value})
      .then(response=>{
        if(response.data.success){
          console.log('response',response)
          setLists([...lists,response.data])
          setValue("");
        }else{
          alert("Failed to Upload value into Database")
        }
      })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

          {lists && lists.map((list,index)=> (
            <li key={index}>{list.value} </li>
          ))}
          안녕하세요.
          <form className="example" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Input Please.."
              onChange={changeHandler}
              value={value}
              />
              <button type ="submit">Check</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
