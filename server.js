const http = require('http')

const fs = require('fs')

http.createServer((request,response)=> {
    response.end('<h1>Hello Node !!!!!!!</h1>\n')
})
.listen(5000) 


fs.writeFile('Welcome.txt','Welcome Node',function(err,data){
    if (err) {
        return console.log(err)
    }
    console.log('file created successfully !')
})

fs.readFile('./Welcome.txt',function(err,data){
    if(err){
        return console.log(err)
    }
    return console.log('asynchrounous read',data.toString())
})