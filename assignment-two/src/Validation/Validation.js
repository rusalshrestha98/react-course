import React from 'react'

const Validation = (props) => {
    let validationMessage = "Text too short!"
    if (props.textLength > 5) {
        validationMessage = "Text long enough!"
    }

    return (
        <div>
            {validationMessage}
        </div>
    )
}

export default Validation