// contractor-prototype/client/src/components/WorkOrderTable.js
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'  // Add this import
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
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
                                <Button
                                    variant="contained"
                                    color="error"
                                    start={<DeleteIcon />}
                                    onClick={() => deleteWorkOrder(wo.wo)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default WorkOrderTable