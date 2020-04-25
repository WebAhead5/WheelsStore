
var handler=require("./handler")

const router =(request,response )=>
{

Url=request.url;


if(Url === "/")
{
handler.homePagehandler(request,response);
}

if(Url=== "/search")
{
handler.searchHandler()
}

if(Url=== "/add")
{

    handler.addHandler();

}

if(Url=== "/showHandler")
{

    handler.showWheels;

}/*
if(Url=== "/delete")
{
deleteHandler()
}*/
else{
    handler.publichandler(request,response);
}



}

module.exports=router;
