const http = require("http");
const port = 5000;
const host = "localhost";
const requireListener = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader("X-Powered-By", "NodeJS");

  response.statusCode = 200;

  const { method, url } = request;

  if (url == "/") {
    if (method == "GET") {
      response.end(
        JSON.stringify({
          message: "Ini adalah homepage",
        })
      );
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else if (url == "/about") {
    if (method == "GET") {
      response.end(JSON.stringify({ message: `Ini adalah halaman about` }));
    }
    if (method == "POST") {
      let body = [];

      request.on("data", (chuck) => {
        body.push(chuck);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(
          JSON.stringify({ message: `Halo, ${name}! ini adalah halaman about` })
        );
      });
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `Halaman tidak dapat diakses dengan ${method} request`,
        })
      );
    }
  } else {
    response.statusCode = 400;
    response.end(JSON.stringify({ message: `Halaman tidak ditemukan!` }));
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
