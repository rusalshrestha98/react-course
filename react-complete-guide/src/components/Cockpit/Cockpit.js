import React, { useContext }  from 'react'
import classes from './Cockpit.css'
import { useEffect } from 'react'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const authContext = useContext(AuthContext)
    useEffect(() => {
        console.log("Fuck")
    }, [])

    const assignedClasses = []
    let buttonClasses = ''
    if (props.showPersons) {
        buttonClasses = classes.Red
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red) // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold) // classes = ['red bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={buttonClasses} 
                onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    )
}

export default cockpit