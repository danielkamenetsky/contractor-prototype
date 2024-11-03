// contractor-prototype/client/src/components/WorkOrderForm.js
import React from 'react'
import {
    TextField,
    Button,
    Box,
    Paper,
    Typography,
    Stack
} from '@mui/material'

const WorkOrderForm = ({
    addWorkOrder,
    newWo,
    setNewWo,
    newMunicipality,
    setNewMunicipality,
    newRin,
    setNewRin,
    newRoadside,
    setNewRoadside,
    newRoadName,
    setNewRoadName
}) => {
    return (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
                Add New Work Order
            </Typography>
            <Box component="form" onSubmit={addWorkOrder}>
                <Stack spacing={2}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            fullWidth
                            label="Work Order Number"
                            value={newWo}
                            onChange={(e) => setNewWo(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Municipality"
                            value={newMunicipality}
                            onChange={(e) => setNewMunicipality(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            fullWidth
                            label="RIN"
                            value={newRin}
                            onChange={(e) => setNewRin(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Roadside"
                            value={newRoadside}
                            onChange={(e) => setNewRoadside(e.target.value)}
                        />
                    </Box>
                    <TextField
                        fullWidth
                        label="Road Name"
                        value={newRoadName}
                        onChange={(e) => setNewRoadName(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 1 }}
                    >
                        Add Work Order
                    </Button>
                </Stack>
            </Box>
        </Paper>
    )
}

export default WorkOrderForm