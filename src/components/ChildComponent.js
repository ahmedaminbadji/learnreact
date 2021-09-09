import React from 'react';

const ChildComponent = props => {

    return(
        <div>
            <input type="number"
                   placeholder="Update text"
                   onChange={(event) => props.onChange(parseInt(props.parentValue)+parseInt(event.target.value))}
            />
        </div>
    )
}
export default ChildComponent;