import React, {useState} from 'react';
import ChildComponent from './components/ChildComponent';


function App() {
    const [count,setCount] = useState(2);
  return (
   <div className="parentComponent">
       <div className="wrapper">
           <h1>Hello,there {count} </h1>
           <ChildComponent onChange={(value) => setCount(value)} parentValue={count} />
       </div>
   </div>
  );
}

export default App;
