import { useState, useEffect } from 'react'
import Notification from './components/Notification'
import workOrderService from './services/workOrderService'


const App = () => {
  // State to store work orders, initially an empty array
  // workOrders stores the data, setWorkOrders is the function to update the data
  const [workOrders, setWorkOrders] = useState([])
  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('success')
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


  // This function shows messages to the user (like "Work order added!" or "Error!")
  const showNotification = (message, type = 'success') => {
    // Put the message in our notification box
    setNotification(message)

    // Set if it's a good message (green) or bad message (red)
    // If we don't specify type, it defaults to 'success' (green)
    setNotificationType(type)

    // Make the message disappear after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      // Clear the message by setting it back to null
      setNotification(null)
    }, 5000)
  }



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
        showNotification(`Added work order ${response.data.wo}`)
        // Clear form
        setNewWo('')
        setNewMunicipality('')
        setNewRin('')
        setNewRoadside('')
        setNewRoadName('')
      })
      .catch(error => {
        showNotification('Failed to add work order', 'error') // Add this
      })
  }

  // Add this new function
  const deleteWorkOrder = (wo) => {
    if (window.confirm(`Delete work order ${wo}?`)) {
      workOrderService
        .remove(wo)
        .then(() => {
          // Filter out the deleted work order
          setWorkOrders(workOrders.filter(workOrder => workOrder.wo !== wo))
          showNotification(`Work order ${wo} deleted successfully`)
        })
        .catch(error => {
          showNotification('Failed to delete work order', 'error')
        })
    }
  }

  return (
    <div>
      <h1>Work Orders</h1>
      {/* Add the Notification component here */}
      <Notification message={notification} type={notificationType} />

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
          <button onClick={() => deleteWorkOrder(wo.wo)}>
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default App