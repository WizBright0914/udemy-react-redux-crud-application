import React from 'react'
function App() {  
  const profiles = [
    {name:"Taro", age: 10},
    {name:"Hanako", age: 5},
  ]

  return (
  <div>
    {
profiles.map((profiles, index)=>{
  return <User name={profiles.name} age={profiles.age} key={index}></User>
})
    }
  </div>

  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}
export default App;
