import { useState, useEffect } from 'react'

import workOrderService from './services/workOrderService'

const App = () => {
  // State to store work orders, initially an empty array
  // workOrders stores the data, setWorkOrders is the function to update the data
  const [workOrders, setWorkOrders] = useState([])

  // When the page loads do the following:
  useEffect(() => {
    // Go get the work orders from our backend
    workOrderService
      .getAll()
      // When we get the data back:
      .then(response => {
        //store it in workOrders
        setWorkOrders(response.data)
      })
  }, []) // Only do this when page first loads


  return (
    <div>
      <h1>Work Orders</h1>
      {/* For each work order in our list, show this: */}
      {workOrders.map(wo => (
        <div key={wo.id}>
          {wo.wo} - {wo.municipality}
        </div>
      ))}
    </div>
  )

  //
}

export default App