import React, {useState} from 'react';
import ChildComponent2 from './ChildComponent2';


const ChildComponent = props => {

    return(
        <div>
            <input type="number"
                   placeholder="Update text"
                   onChange={(event) => props.onChange(parseInt(props.parentValue)+parseInt(event.target.value))}
            />
            <ChildComponent2  changeWord={word => props.onChange(word)} />
        </div>
    )
}
export default ChildComponent;