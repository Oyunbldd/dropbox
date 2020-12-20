import React, { useContext } from 'react'
import {firebase,db,storage} from '../firebase'
import {TasksContext} from '../provider/provider'
const AddButton = () => {
    const hiddenFileInput = React.useRef(null)
    const {setTasks}=useContext(TasksContext)
    const {tasks}=useContext(TasksContext)
   const  onChange=(e)=>{
        const file=e.target.files[0];
        const storageRef=firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        fileRef.put(file).then(()=>{
            console.log("UPLOADED A FILE")  
            setTasks([...tasks,{name:file.name}])
        })
    }
    const darsan=(e)=>{
        hiddenFileInput.current.click();
    }
    return (
        <div style={{ backgroundColor: 'rgb(77,121,213)', width: '60%', borderRadius: '30px', height: '50px', display: 'flex', justifyContent: 'center' }}>
            <div onClick={darsan} style={{ fontSize: '24px', color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
                Upload File
            </div>
            <input type='file' name='file'  className='haragdahgui' onChange={onChange}
             ref={hiddenFileInput}  />
        </div>
    )
}
export default AddButton