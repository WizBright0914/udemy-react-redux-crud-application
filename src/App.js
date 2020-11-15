import React from 'react'
import PropTypes from 'prop-types'
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

User.propTypes = {
  name:PropTypes.string,
  age:PropTypes.number.isRequired
}

export default App;
