
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
  
  const api_key = '7ced6d8d6d9a284cf5a1eb277e827d88-9ce9335e-1651df4e';
  const domain = 'sandbox0ad6c78c3cb84ea4b798ba9a08d87675.mailgun.org';
  const mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
  const data = {
  from: 'Excited User <postmaster@sandbox0ad6c78c3cb84ea4b798ba9a08d87675.mailgun.org>',
  to: 'cpmchandra18@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!',
 // html:output
};
 
mailgun.messages().send(data, (error, body) =>{
  console.log(body);
  if(!error)
    console.log('message send!!');
  else
      console.log('please correct the error!!');
  
});
});

http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});
