import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../App';

function ChildC() {
    const user = useContext(UserContext);
  return (
    <div className='p-10'>
        
        This is child c :
        which is accessing the data of parent node {user.name}
    </div>
  )
}

export default ChildC