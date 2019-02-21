const accountSid = 'AC1c8fa90aa7c76bc1a90224f7ac6ce55f';

const authToken = 'a74b3de28105475e121b17c85274a10c';
const client = require('twilio')(accountSid, authToken);

client.calls
  .create({
    url: 'https://handler.twilio.com/twiml/EHfc2cdfc8bc4c8f045d7373037d10e8b6',
    to: '+919008893627',
    from: '+16038383157',
  })
  .then(call => process.stdout.write(call.sid));