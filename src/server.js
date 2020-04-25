var http =require('http');

var router= require('./router.js')

var PORT =3000 || process.env.PORT;


var creatCon=http.createServer(router);

creatCon.listen(PORT,() =>{
    console.log("Welcome welcome");
})