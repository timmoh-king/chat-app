const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: String,
    senderMail: String,
    receiverMail: String,
    timestamp: Number
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
