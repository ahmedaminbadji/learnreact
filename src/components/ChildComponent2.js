import React from 'react';

const ChildComponent2 = props => {

    return(
        <div>
           <button onClick={() => props.changeWord('I am the child of the child')}>
                Click me
           </button>

        </div>
    )
}
export default ChildComponent2;