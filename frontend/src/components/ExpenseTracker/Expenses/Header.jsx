// Shortcut for functional component is "rafc"
import React from 'react'

export const Header = (props) => {

    return (
        <h2 style={{marginTop:"1em"}}>
            {props.name}
        </h2>
    )
}
