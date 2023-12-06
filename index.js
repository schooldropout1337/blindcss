var http = require('http'),                              
	fs = require('fs');
        fs.readFile('index.html', function (err, html) {
     if (err) { throw err;}                                                    
	http.createServer(function(request, response) {            
		console.log('Header : %s', request.headers);
        console.log('%s : %s',request.method, request.url);
        response.writeHeader(200, {"Content-Type": "text/html"});                                                  
	response.write(html);                                      
		response.end();
    }).listen(3000);
   console.log('Page running on http://127.0.0.1:3000');
   });
