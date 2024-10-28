// src/components/Notification.js
const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={`notification ${type}`}>
            {message}
        </div>
    )
}

export default Notification