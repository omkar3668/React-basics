import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'

function NameList() {
    const list = [ 'omkar', 'shubham', 'Xyz', 'Xyz']
 const name =   list.map( (lists, index) => <h1 key={lists}><ul><i>{index} {lists}</i></ul></h1> )

  return (
    <div>
        {
            // list.map(lists => <h1><ul><i>{lists}</i></ul></h1> )
        }
        {name}
    </div>
  )
}

export default NameList