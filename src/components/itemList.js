import React from 'react'
import {firebase,db,storage} from '../firebase'
import fileIcon from './../file.png'

const ItemList = ({ name = 'name', date = '2020/20/20',url=''}) => {
    const darsan=()=>{
        window.open(url,'_blank')
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '50px', padding: '10px', margin: '30px', backgroundColor: 'white', borderRadius: '5px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={fileIcon} height={'30px'} width={'30px'} />
            </div>
            <div onClick={darsan} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: '10px' }}>
                <div style={{ color: 'rgba(0,0,0,.72)', fontSize: '16px' }}> {name} </div>
                <div style={{ color: 'rgba(0,0,0,.54)', fontSize: '14px' }}> {date} </div>
            </div>
        </div>
    )
}

export default ItemList