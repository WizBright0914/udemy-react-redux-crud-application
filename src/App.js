import React from 'react'
function App() {  
  return (
  <>
    <label htmlFor='bar'>bar</label>
    <input type='text' onChange={() => {console.log("I'm clicked")}} />
  </>
  );
}

export default App;
