import React from 'react';

import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Nunc faucibus urna eget nisl maximus, eget tempus felis porta. Donec sapien tellus, molestie quis sodales sed, porta vitae risus. Maecenas convallis ex magna, vitae facilisis tortor molestie sit amet. Fusce luctus tristique arcu, pulvinar vehicula quam dictum ut. Duis eu semper arcu. Fusce feugiat semper nunc vel molestie. In eu lectus vel velit porta dignissim sed porta nunc.</p>
            <p>{props.username}</p>
        </div>
        
    );
};

export default useroutput;