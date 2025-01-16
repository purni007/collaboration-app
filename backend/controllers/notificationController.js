let notifications = [];

const sendNotification = (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    notifications.push({ id: notifications.length + 1, message });
    res.status(200).json({ success: true, message: 'Notification sent!' });
};

const getNotifications = (req, res) => {
    res.status(200).json({ success: true, data: notifications });
};

module.exports = { sendNotification, getNotifications };


