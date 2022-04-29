import React, {KeyboardEvent, ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value.trim()
        if (trimmedName.length <= 0) {
            setName(trimmedName)
            setError('name is required!')
        } else {
            setName(trimmedName)
            setError('')
        }
    }

    const addUser = () => {
        if (name.length>0) {
            addUserCallback(name)
            alert(`Hello  ${name}`)// need to fix
            setName('')
        } else {
            setError('name is reqired!')
        }
    }


    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && name.length>0) {
            addUser()
            setName('')
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressAddTask={onKeyPressAddTask}
        />
    )
}

export default GreetingContainer
