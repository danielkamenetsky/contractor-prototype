// client/src/components/Notification.js
import { Alert, Snackbar } from '@mui/material';

const Notification = ({ message, type }) => {
    if (message === null) {
        return null;
    }

    return (
        <Snackbar
            open={!!message}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert severity={type} elevation={6} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;