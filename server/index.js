const http = require("http");
const url = require("url");
const usersData = require("./data/users");

const config = {
  PORT: 4242,
};

// eslint-disable-next-line no-promise-executor-return
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const listener = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  response.setHeader("Access-Control-Max-Age", 2592000);

  const queryString = url.parse(request.url, true);
  response.setHeader("Content-Type", "application/json");
  const userId = queryString.pathname.split("/users/")[1];
  await sleep(1000);

  if (queryString.pathname === "/users") {
    response.end(JSON.stringify(usersData));
  } else if (userId) {
    response.end(JSON.stringify(usersData.find(
      (i) => i.id === Number(userId),
    )));
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({}));
  }
};

const server = http.createServer(listener);
server.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${config.PORT}`);
});
