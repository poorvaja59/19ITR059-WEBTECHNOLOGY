var http=require('http');
var querystring=require('querystring');
http.createServer(function(request,response)
{
        var data1='';
        request.on('data',function (chunk)
        { 
             data1+=chunk;
        });
        request.on('end',function()
        {
                qs=querystring.parse(data1);
                console.log(qs);
                var fname= qs["fname"];
                var lname= qs["lname"];
                var rno= qs["rno"];
                var gen= qs["gen"];
                var dept= qs["dept"];
                var yr= qs["yr"];
                var email= qs["email"];
                var num= qs["num"];
                
                response.write("FIRST NAME\t: "+fname);
                response.write("\n\nLAST NAME\t: "+lname);
                response.write("\n\nROLL NO\t\t: "+rno);
                response.write("\n\nGENDER\t\t: "+gen);
                response.write("\n\nDEPARTMENT\t: "+dept);
                response.write("\n\nYEAR OF STUDY\t: "+yr);
                response.write("\n\nEMAIL\t\t: "+email);
                response.write("\n\nMOBILE NUMBER\t: "+num);

                response.end();
        });
}).listen (8000);