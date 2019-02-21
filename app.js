
const http = require('http');
const express = require('express');
//const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', function(req, res) {
  //const twiml = new MessagingResponse();
  //twiml.message('The Robots are coming! Head for the hills!');
  //res.writeHead(200, {'Content-Type': 'text/xml'});
  //res.end(twiml.toString());
  // Twilio Credentials
const accountSid = 'AC1c8fa90aa7c76bc1a90224f7ac6ce55f';
const authToken = 'a74b3de28105475e121b17c85274a10c';

// require the Twilio module and create a REST client
const sms = require('twilio')(accountSid, authToken);

sms.messages.create(
  {
    to: '+919008893627',
    from: '+16038383157',
    body: 'hi, i am chandra, just checking whether this app is working properly or not...',
  },
  (err, message) => {
    console.log(message.sid);
  }
);
const voice = require('twilio')(accountSid, authToken);

voice.calls
  .create({
    url: 'https://handler.twilio.com/twiml/EHfc2cdfc8bc4c8f045d7373037d10e8b6',
    to: '+919008893627',
    from: '+16038383157',
  })
  .then(call => process.stdout.write(call.sid));
});

http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});