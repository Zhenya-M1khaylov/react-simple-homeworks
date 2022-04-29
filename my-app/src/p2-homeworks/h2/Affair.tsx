import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number)=>void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {props.deleteAffairCallback(id)}

    return (
        <div>
            {props.affair.name}
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
