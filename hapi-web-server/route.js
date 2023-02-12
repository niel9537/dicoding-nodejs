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
