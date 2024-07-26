var express = require('express');  
var app = express();  
app.use(express.static('public'));  
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });


function start(client) {

       client.getAllChatsGroups()
	.then(function(result){
             //console.log(result)
	    //console.log(result[0].id._serialized)
		for (group of result){
                      //console.log(group.id)
		    if(group.id.server.includes('g.us')){
                       console.log('Nome: ' + group.name + ' - ID: ' + group.id._serialized.split('@')[0])
                   }

		}
         })


app.get('/enviamsg', function (req, res) {  
response = {  
       telefone:req.query.telefone,  
       msg:req.query.msg  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
client.sendText(req.query['telefone']+'@g.us', req.query['msg'])
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  })
})
}

var server = app.listen(8000, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Bot Fórum Telecom rodand http://%s:%s", host, port)  
  
})

