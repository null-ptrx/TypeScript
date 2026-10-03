import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import type { Chai } from './types.ts'
import ChaiList from './components/ChaiList.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import { Card } from './components/Card.tsx'

const menu: Chai[] = [
  {id: 1, name : 'ginger', price : 20},
  {id: 2, name : 'adark', price : 30},
  {id: 3, name : 'masala', price : 40}
]
function App() {


  return (
    <>
      <ChaiCard name="headphones" price={5000} />
      <ChaiCard name="iphone" price={80000} />
      <Counter/>
      <ChaiList
        items= {menu}
      />
      <OrderForm onSubmit= {(order) => {
        console.log("placed", order.name, order.cups)
      }}/>

      <Card title = "chai aur typescript" footer = {<button>ordernow</button>}/>
    </>
  )
}


export default App
