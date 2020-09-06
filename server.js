const http = require('http');

const html =
    `
<!Doctype>
<html>
    <head>
        <meta charset="utf-8">
        <title>Заголовок</title>
        <link rel="stylesheet" href="app.css">
    </head>

    <body>
        <h1>Hello</h1>
        <button>Жмяк</button>

        <script src="app.js"></script>
    </body>
</html>
`;

const css =
    `
body{
    margin:0;
    padding:0;
    text-align:center;
}

h1{
    background-color:#FAFAFA;
    color:black;
    padding:5em;
    font-family:"Comic Sans"
}
`;

const js =
    `  
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Робит'))

`


http.createServer((req, res) => {
    //console.log(req.url);
    //console.log(req.method);
    //console.log(req.headers);
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);

        case '/app.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);

        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Не найдено');
    }

}).listen(3000, () => console.log('It Works'))