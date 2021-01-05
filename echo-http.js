import http from "http";


const PORT = 81;

const server = http.createServer((request, response) => {
    // console.log(request.url);
    // console.log(request.headers);
    response.setHeader(`Content-Type`, `text/plain`);
    response.writeHead(200);
    response.write(`${request.url}    Method: ${request.method}

    Headers:

${
        Object.entries(request.headers).map(([key, value]) => {
            return `${key}: ${value}
`;
        }).join("\n")
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
