import { useState, useEffect } from 'react'

const App = () => {

  let  [count,setCount] = useState(0)
  let [animal,setAnimal] = useState('Dog')

  const addOne = () => setCount(count + 1);
  const restOne = () => setCount(count - 1);
  const setZero = () => setCount(0);

  const doApicall = () => {
    console.log('go to server and get data')
  }

  useEffect(() => {
    console.log('run once')
  }, [])


  // useEffect(()=>{
  //  console.log(count)
  // },[count])

  // useEffect(()=>{
  //   console.log(animal)
  //  },[animal])


  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={restOne}>-1</button>
      <button onClick={setZero}>Set to 0</button>
      <hr/>
      <h3>{animal}</h3>
      <button onClick={ () => setAnimal('Cat')}>Change Animal</button>
    </div>
  )
}

export default App;