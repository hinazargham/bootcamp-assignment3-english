import React from 'react';
import "./hello.css"

function Hello({myhello, myname}) {

    return (
        
        <div>
        <p>HELLO from CHILD component ie. "{myhello}" file </p>
        <br/>
        <i>Submitted by Engr. {myname}</i>
    </div>

    )
}


export default Hello;