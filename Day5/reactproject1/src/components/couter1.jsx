import { useState } from "react"

const Counter1 = () =>{
    const [counter, setCouter] = useState(0)
    const handleClick  = () => {
        setCouter(counter + 1)
    }
    return(
        <>
            <h1>Counter 1: {counter}</h1>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}
export default Counter1