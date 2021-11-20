import http from "node:http";


const PORT = 83;

const server = http.createServer((request, response) => {
    request.on('error', function () {});
    response.on('error', function () {});
    // console.log(request.url);
    // console.log(request.headers);
    response.setHeader(`Content-Type`, `text/plain`);
    response.writeHead(200);
    response.write(`${request.url}    Method: ${request.method}

    Headers:

${
        request.rawHeaders.map((x, i) => {
            if (i %2 === 0) {
              return x  
            } else {
                return `: ${x}
`;
            }
        }).join("")
}
    Body:

`);
    request.pipe(response);
});

const start = function () {
    server.listen(PORT);
    console.log(`Listening on ${PORT}`);
};

start();
