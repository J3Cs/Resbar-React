import React, {useState} from 'react'
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [form, setValues] = useState({});
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="app logo"/>
      <div className="App__login">
        <h2>Login</h2>
        <form>
          <label htmlFor="user">Usuario</label>
          <input type="text" id="user" name="user" onChange={handleInput}/>
          <label htmlFor="pass">Contraseña</label>
          <input type="text" id="pass" name="password" onChange={handleInput}/>
          <input type="button" value="Login" onClick={handleSubmit}/>
        </form>
      </div>
    </div>
  );
}

export default App;
