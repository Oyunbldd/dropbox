import React, { useContext, useState } from 'react'
import ItemList from './itemList'
import {firebase,db,storage} from '../firebase'
import {TasksContext} from '../provider/provider'
const List = () => {
   const {tasks}=useContext(TasksContext)
    return (
        <div className='list'>
            {
              tasks.map(item => (<ItemList {...item} />))
            }
        </div>
    )
}

export default List