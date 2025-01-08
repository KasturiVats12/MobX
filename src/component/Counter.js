import { create } from "zustand";

const useStore = create((set)=>({
  counter:0,
  counterIncrement:()=>set((state)=>({counter:state.counter+1}))
}))

function Counter(){
  const {counter,counterIncrement} = useStore()
  return(
    <>
    <h1>{counter}</h1>
    <button onClick={counterIncrement}>One up</button>
    </>
  )
}
export default Counter;