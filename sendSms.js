// Twilio Credentials
const accountSid = 'AC1c8fa90aa7c76bc1a90224f7ac6ce55f';
const authToken = 'a74b3de28105475e121b17c85274a10c';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+919008893627',
    from: '+16038383157',
    body: 'hi, i am chandra, just checking whether this app is working properly or not...',
  },
  (err, message) => {
    console.log(message.sid);
  }
);