const accountSid = 'AC1c8fa90aa7c76bc1a90224f7ac6ce55f';
const authToken = 'a74b3de28105475e121b17c85274a10c';
const client = require('twilio')(accountSid, authToken);

client.fax.faxes
  .create({
     from: '+918792694108',
     to: '+16038383157',
     mediaUrl: 'https://www.twilio.com/docs/documents/25/justthefaxmaam.pdf'
   })
  .then(fax => console.log(fax.sid));