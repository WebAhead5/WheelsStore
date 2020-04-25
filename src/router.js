
var handler=require("./handler")

const router =(request,response )=>
{

Url=request.url;


if(Url === "/")
{
handler.homePagehandler(request,response);
}

if(Url.includes("/searchComp"))
{
handler.searchHandlerComp(request,response);                    
}
if(Url=== "/searchComp1")
{
handler.searchHandler()
}

if(Url=== "/add")
{

    handler.addHandler();

}

if(Url=== "/showwheels")
{

    handler.showwheels(request,response);

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
