const http = require("http");
const port = 5000;
const host = "localhost";
const requireListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;

  const { method, url } = request;

  if (url == "/") {
    if (method == "GET") {
      response.end("<h1>Ini adalah homepage</h1>");
    } else {
      response.end(
        "<h1>Halaman tidak dapat diakses dengan ${method} request</h1>"
      );
    }
  } else if (url == "/about") {
    if (method == "GET") {
      response.end("<h1>Ini adalah halaman about</h1>");
    }
    if (method == "POST") {
      let body = [];

      request.on("data", (chuck) => {
        body.push(chuck);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`<h1>Halo, ${name}! ini adalah halaman about</h1>`);
      });
    } else {
      response.end(
        "<h1>Halaman tidak dapat diakses dengan ${method} request</h1>"
      );
    }
  } else {
    response.end("<h1>Halaman tidak ditemukan!</h1>");
  }

  // if (method == "POST") {
  //   let body = [];

  //   request.on("data", (chuck) => {
  //     body.push(chuck);
  //   });

  //   request.on("end", () => {
  //     body = Buffer.concat(body).toString();
  //     const { name } = JSON.parse(body);
  //     response.end(`<h1>Hai, ${name}!</h1>`);
  //   });
  // }

  // if (method == "PUT") {
  //   response.end("<h1>Bonjour</h1>");
  // }

  // if (method == "DELETE") {
  //   response.end("<h1>Salam</h1>");
  // }
};

const server = http.createServer(requireListener);

server.listen(port, host, () => {
  console.log("Server listening on port " + port);
});
