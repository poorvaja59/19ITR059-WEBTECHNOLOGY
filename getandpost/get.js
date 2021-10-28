http=require('http');
url=require('url');
querystring=require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("URL"+url);
    var query=url.parse(request.url).query;
    console.log("QUERY"+query);
    
    var fname=querystring.parse(query)["fname"];
    var lname=querystring.parse(query)["lname"];
    var rno=querystring.parse(query)["rno"];
    var gen=querystring.parse(query)["gen"];
    var dept=querystring.parse(query)["dept"];
    var yr=querystring.parse(query)["yr"];
    var email=querystring.parse(query)["email"];
    var num=querystring.parse(query)["num"];
    
    response.write("FIRST NAME\t: "+fname);
    response.write("\n\nLAST NAME\t: "+lname);
    response.write("\n\nROLL NO\t\t: "+rno);
    response.write("\n\nGENDER\t\t: "+gen);
    response.write("\n\nDEPARTMENT\t: "+dept);
    response.write("\n\nYEAR OF STUDY\t: "+yr);
    response.write("\n\nEMAIL\t\t: "+email);
    response.write("\n\nMOBILE NUMBER\t: "+num);
    response.end();
}
http.createServer(onRequest).listen(7000);