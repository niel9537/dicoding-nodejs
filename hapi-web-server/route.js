const route = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return `HomePage`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;
      if (lang == "id") {
        return `Hai ${name}!`;
      }
      return `Hello ${name}!`;
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Page not found";
    },
  },
];

module.exports = route;
