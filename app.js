const http =require('http');
const { homedir } = require('os');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        req.end('welcome to our home page')
    }
   if(req.ulr==='/about'){
       res.end('here is our about page')
   }
res.end(`<h1>oops!</h1>
<a href='/'>back home</a>`)

})
server.listen(5000)

const _= require('lodash')

const items=[1,[2,[3,[4]]]]
const newItmes = _.flattenDeep(items)
console.log(newItmes)