import { useState, useEffect } from 'react'

import workOrderService from './services/workOrderService'


const App = () => {
  // State to store work orders, initially an empty array
  // workOrders stores the data, setWorkOrders is the function to update the data
  const [workOrders, setWorkOrders] = useState([])

  // State for form inputs
  const [newWo, setNewWo] = useState('')
  const [newMunicipality, setNewMunicipality] = useState('')
  const [newRin, setNewRin] = useState('')
  const [newRoadside, setNewRoadside] = useState('')
  const [newRoadName, setNewRoadName] = useState('')


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


  const addWorkOrder = (event) => {
    event.preventDefault()

    const workOrderObject = {
      wo: Number(newWo),
      municipality: newMunicipality,
      rin: newRin,
      roadside: newRoadside,
      roadName: newRoadName
    }
    console.log('Sending to backend:', workOrderObject)
    // Send to backend
    workOrderService
      .create(workOrderObject)
      .then(response => {
        console.log('Response from backend:', response.data) // See what we get back
        setWorkOrders(workOrders.concat(response.data))
        // Clear form
        setNewWo('')
        setNewMunicipality('')
        setNewRin('')
        setNewRoadside('')
        setNewRoadName('')
      })
  }

  // Add this new function
  const deleteWorkOrder = (id) => {
    if (window.confirm(`Delete work order ${id}?`)) {
      workOrderService
        .remove(id)
        .then(() => {
          // Filter out the deleted work order
          setWorkOrders(workOrders.filter(wo => wo.id !== id))
        })
    }
  }

  return (
    <div>
      <h1>Work Orders</h1>

      <form onSubmit={addWorkOrder}>
        <div>
          Work Order Number:
          <input
            value={newWo}
            onChange={(event) => setNewWo(event.target.value)}
          />
        </div>
        <div>
          Municipality:
          <input
            value={newMunicipality}
            onChange={(event) => setNewMunicipality(event.target.value)}
          />
        </div>
        <div>
          RIN:
          <input
            value={newRin}
            onChange={(event) => setNewRin(event.target.value)}
          />
        </div>
        <div>
          Roadside:
          <input
            value={newRoadside}
            onChange={(event) => setNewRoadside(event.target.value)}
          />
        </div>
        <div>
          Road Name:
          <input
            value={newRoadName}
            onChange={(event) => setNewRoadName(event.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>

      {workOrders.map(wo => (
        <div key={wo.wo}>
          {wo.wo} - {wo.municipality} - {wo.rin} - {wo.roadside} - {wo.roadName}
          {/* Add delete button */}
          <button onClick={() => deleteWorkOrder(wo.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default App