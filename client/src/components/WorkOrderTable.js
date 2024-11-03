// src/components/WorkOrderTable.js
import React from 'react'

// This component receives two props from App.js:
// - workOrders: the array of work orders to display
// - deleteWorkOrder: the function to call when delete button is clicked
const WorkOrderTable = ({ workOrders, deleteWorkOrder }) => {
    return (
        <div>
            {/* Loop through each work order in the array */}
            {workOrders.map(wo => (
                // Create a div for each work order, using wo number as unique key
                <div key={wo.wo}>
                    {/* Display work order information with dashes between each field */}
                    {wo.wo} - {wo.municipality} - {wo.rin} - {wo.roadside} - {wo.roadName}
                    {/* Delete button that calls deleteWorkOrder function with this wo's number */}
                    <button onClick={() => deleteWorkOrder(wo.wo)}>
                        delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default WorkOrderTable