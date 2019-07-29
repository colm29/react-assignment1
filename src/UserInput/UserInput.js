import React from 'react';

import './UserInput.css'

const userinput = (props) => {
    return (
        <input className="UserInput" type="text" onChange={props.change} value={props.username} />
    );
};

export default userinput;