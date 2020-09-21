import React, {useState, useEffect} from 'react';

import './TestComponent.css'

function TestComponent (props: {name: string}) {

    const[age, setAge] = useState(21);

    useEffect(() => {
        console.log('Component Created')
    }, [])

    console.log('second Created')

    useEffect(() => {
        console.log('Age has been updated to:' + age)
    },[age])

    return <div className="TestComponent">
        Olá, {props.name}, {age}
       <button onClick={()=> {
           setAge(age+1)
           //state.age++
           //console.log(state.age);
       }}>+</button>
       </div>
} 

export default TestComponent;