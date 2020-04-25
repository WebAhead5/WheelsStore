var path = require("path")
var fs = require("fs")
const  getData  = require('./DB/queries/getdata');
var url=require('url');
var qs=require("querystring")

const extension = {
html: 'text/html'
,css:'text/css'
,js:'application/js'
,ico: 'image/x-icon'
,jpg:'image/jpg'

}


const homePagehandler = (request, response) => {
    var filepath = path.join(__dirname, "../public", "index.html");
    fs.readFile(filepath, (err, file) => {

        if (err) {
            console.log(err)
        }
        else {
            response.writeHead(200, { "content-type": "text/html" })
            response.end(file);
        }
    })


}

const publichandler = (request, response) => {
    
    const extensiontype=request.url.split('.')[1]; 
    var filepath = path.join(__dirname,"../public",request.url)
    console.log(request.url);
    fs.readFile(filepath, (err, file) => {

        if (err) {
            console.log(err)
        }
        else {
            response.writeHead(200, { "content-type": extension[extensiontype] })
            response.end(file);
        }

    
    })

}



const showwheels= (request,response)=>
{
    getData.getAllWheels((err, res) => {
        if (err) {
            console.log(err)
            response.end('Sorry error found');
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(res)
    })
};


const deleteHandler=(request,response)=>
{
    
}
const addHandler=(request,response)=>
{
}
const searchHandlerComp=(request,response)=>
{

    var urlcompany=url.parse(request.url).query;
    var company=qs.parse(urlcompany).companyname;
    console.log('hiiiii');
    getData.getByCompany(company,(err, res) => {
        if (err) {
            console.log(err)
            response.end('Sorry error found');
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(res)
    })

}

module.exports = { homePagehandler, publichandler,addHandler,searchHandlerComp ,showwheels} 