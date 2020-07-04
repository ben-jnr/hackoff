import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const handleChange = () =>{
    document.getElementById('AdminPanelMssg').innerText = "Admins Only! Trespassers will be seriously dealt with";
  }

  const handleClick = (e) =>{
    e.preventDefault();
    var forms = document.querySelectorAll('.AdminPanelForm');
    if(forms[0].value === "")
    {
      document.getElementById('AdminPanelMssg').innerText = "Username is Mandatory";
      return;
    }
    if(forms[1].value === "")
    {
      document.getElementById('AdminPanelMssg').innerText = "Password is Mandatory";
      return;
    }
    if(forms[0].value === 'admin')
    {
      if(forms[1].value === 'hopeyoudebuggedme')
      {
        var arr = ['h','a','c','k','o','f','f','{','u','r','_','s','e','t','a','i','n','}','c','e','a','t','_','y','o','_','c','a','p','r','v','i','a','{','q','e','w','e','}','x','5','_']; 
        var string = "";
        var i = 0
        for(i=0;i<=7;i++)
          string = string + arr[i];
          for(i=20;i<=24;i++)
            string = string + arr[i];
          for(i=8;i<=12;i++)
            string = string + arr[i];
          for(i=29;i<=31;i++)
            string = string + arr[i];
          for(i=18;i<=19;i++)
            string = string + arr[i];
          for(i=25;i<=28;i++)
            string = string + arr[i];
          for(i=13;i<=17;i++)
            string = string + arr[i];
        document.getElementById('App').innerHTML = string;
      }
      else{
        document.getElementById('AdminPanelMssg').innerText = "You really an Admin? I doubt your innocence";
      }
    }
    else{
      document.getElementById('AdminPanelMssg').innerText = "You really an Admin? I doubt your innocence";
    }  
    forms[0].value = "";
    forms[1].value = "";
  }  


  return (
    <div id="App">
      <h1>Login</h1>
      <form>
        <div><input className='AdminPanelForm' name='username' type='name' placeholder='username' onChange={handleChange}></input></div>
        <div><input className='AdminPanelForm' name='password' type='password' placeholder='password' onChange={handleChange}></input></div>
        <div><input id='AdminPanelSubmit' type='submit' value='Login' onClick={handleClick}></input></div>
      </form>
    <div id="AdminPanelMssg">Admins Only! Trespassers will be seriously dealt with</div>
    </div>
  );
}

export default App;
