import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('use me');
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button> 
    </div>
  )
}

export default FunctionClick