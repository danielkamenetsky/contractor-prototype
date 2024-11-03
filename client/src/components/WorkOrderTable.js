// contractor-prototype/client/src/components/WorkOrderTable.js
import React from 'react'
// Add Material UI imports
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material'

const WorkOrderTable = ({ workOrders, deleteWorkOrder }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Work Order #</TableCell>
                        <TableCell>Municipality</TableCell>
                        <TableCell>RIN</TableCell>
                        <TableCell>Roadside</TableCell>
                        <TableCell>Road Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {workOrders?.map(wo => (
                        <TableRow key={wo.wo}>
                            <TableCell>{wo.wo}</TableCell>
                            <TableCell>{wo.municipality}</TableCell>
                            <TableCell>{wo.rin}</TableCell>
                            <TableCell>{wo.roadside}</TableCell>
                            <TableCell>{wo.roadName}</TableCell>
                            <TableCell>
                                <button onClick={() => deleteWorkOrder(wo.wo)}>
                                    delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WorkOrderTable