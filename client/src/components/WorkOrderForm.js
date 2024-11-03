// src/components/WorkOrderForm.js
import React from 'react'

// This component receives all the form-related props from App.js:
// - Form submission function
// - Values for each input
// - Functions to update each input
const WorkOrderForm = ({
    addWorkOrder,         // Function that handles form submission
    newWo,               // Work order number value
    setNewWo,            // Function to update work order number
    newMunicipality,     // Municipality value
    setNewMunicipality,  // Function to update municipality
    newRin,              // RIN value
    setNewRin,           // Function to update RIN
    newRoadside,         // Roadside value
    setNewRoadside,      // Function to update roadside
    newRoadName,         // Road name value
    setNewRoadName       // Function to update road name
}) => {
    return (
        // Form element that calls addWorkOrder when submitted
        <form onSubmit={addWorkOrder}>
            {/* Each div contains a label and input field */}
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
    )
}

export default WorkOrderForm