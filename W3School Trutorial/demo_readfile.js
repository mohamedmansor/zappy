var http = require('http');
var fs = require('fs');



http.createServer(function(req, res){
    fs.readFile('jsondata.json', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);


/**
 The fs.writeFile() method replaces the specified file and content if it exists.
 If the file does not exist, a new file, containing the specified content, will be created
 */
// fs.writeFile('myNewfile3.txt', 'hello.....', function(err){
//     if(err) throw err;
//     console.log('Saved ^_^ ...!')
// });


/**
 The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing",
 the specified file is opened for writing.
 If the file does not exist, an empty file is created
 */
// fs.open('mynewfile2.txt', 'w',function(err){
//     if(err) throw err;
//     console.log('Saved ^_^ ...!');
// });


/**
The fs.appendFile() method appends specified content to a file.
If the file does not exist, the file will be created
 */
// fs.appendFile('mynewfile1.txt', 'Aloha There!', function(err){
//     if(err) throw err;
//     console.log('Saved ^_^ ...!!');
// });

/**
Update Files
*/
// fs.appendFile('mynewfile1.txt', 'this is my text', function(err){
//     if (err) throw err;
//     console.log('Updated..!');
// });

// fs.writeFile('mynewfile3.txt', 'this is my new text', function(err){
//     if(err) throw err;
//     console.log('Updated...!')
// });


/**
 Delete Files
 To delete a file with the File System module,  use the fs.unlink() method.
*/
// fs.unlink('mynewfile2.txt', function(err){
//     if(err) throw err;
//     console.log('Deleted ...!');
// });

/**
Rename Files
To rename a file with the File System module,  use the fs.rename() method.
*/
// fs.rename('mynewfile1.txt','myrenamedfile.txt', function(err){
//     if(err) throw err;
//     console.log('Renamed');
// });