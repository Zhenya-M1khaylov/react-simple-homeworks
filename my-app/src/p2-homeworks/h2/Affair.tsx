import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }

    return (
        <div>
            <tr>
                <td>{props.affair.name}</td>
                <td>{props.affair.priority}</td>
                <td>
                    <button className={s.buttons} onClick={() => deleteCallback(props.affair._id)}>X</button>
                </td>
            </tr>
        </div>
    )
}

export default Affair
