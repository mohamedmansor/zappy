var WebClient = require('@slack/client').WebClient;

var token = "xoxp-282245886950-281374082370-282659020514-a39917a941951c70b12022d64bc98b3a";

var web = new WebClient(token);

web.channels.list(function(err, info) {
   if (err) {
       console.log('Error:', err);
   } else {
       for(var i in info.channels) {
           console.log(info.channels[i].name);
       }
   }
});