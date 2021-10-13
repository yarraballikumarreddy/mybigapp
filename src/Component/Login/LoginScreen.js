import React, { useState } from "react";

function LoginScreen() {
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [submit, SetSubmit] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const x= [...email,email]
    SetSubmit(x)

  };

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    if (name === "email") {
      Setemail(value);
    } else if (name === "password") {
      Setpassword(value);
    }
  };
  console.log(submit)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <input
          type="password"
          name="password"
          value={password}
          autoComplete="off"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
      <h1>{ submit}</h1>
    </div>
  );
}

export default LoginScreen;
// Srinivas Goud Neela19:16
// const arr=[{name:"A",age:24},{name:"B",age:25},{name:"C",age:26}]
// Srinivas Goud Neela19:32
// let obj ={ 
//   name:"A",
//   parent :{
//      name :"B",
//      child:{ 
//       name :"C",

//        }
//       }
//   }
// [A,B,C]
// You19:57
// https://codesandbox.io/s/falling-dream-7surn?file=/src/App.js:68-88