import React from 'react';
import classes from './Person.css'; 
import PropTypes, { func, number, string } from 'prop-types'
import AuthContext from '../../../context/auth-context'

const person = (props) => {
    return (
        <div className={classes.Person}>
            <AuthContext.Consumer>
                {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
            </AuthContext.Consumer>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default person;