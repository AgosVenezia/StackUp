let request = require('request')

// Call the Infura API and check that the address is valid.
let options = {
 url: 'https://filecoin.infura.io',
 method: 'post',
 headers: {
	'content-type': 'application/json'
 },
 auth: {
	user: '2NSdM19jmVaMqeYcR4lOrsIivix',
	pass: '707926483a22250ba79bacf9790e3fc2'
},
body: `{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "Filecoin.ChainGetBlock",
  	"params": [{"/":"bafy2bzacedyqu6bgjpgmmnzxmirbcyculwprut45agcl5msetp34q5uznz7wa"}]
}`
}

request(options, (error, response, body) => {
 if (error) {
	console.error('Error: ', error)
 } else {
	console.log('Response: ', body)
 }
})