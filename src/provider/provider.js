import React,{createContext,useEffect,useState} from 'react'
import {firebase,db,storage} from '../firebase'
export const TasksContext=createContext({
tasks:[],
addFile:()=>{},
})
export const TasksProvider=({children})=>{
const [tasks,setTasks]=useState([]);
let url;
const addFile=(task)=>{
setTasks([...tasks,{name:task}])
}
    useEffect(()=>{
        const storageRef=firebase.storage().ref()
        var listRef = storageRef;
        listRef.listAll().then(function(res) {
        res.prefixes.forEach(function(folderRef) {
        });
        res.items.forEach((itemRef)=>{
            let ner=itemRef.toString()
            ner=ner.slice(36,ner.length)
             itemRef.getDownloadURL().then(function(downloadURL){
                 url=downloadURL
                 setTasks(tasks=>[...tasks,{name:ner,url:url}])
             })
        });
        }).catch(function(error) {
        });
    },[])
return(
<TasksContext.Provider value={{tasks,addFile,setTasks}}>{children}</TasksContext.Provider>
    )
}