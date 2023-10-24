//Evelyn
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { getEvents } = require("./src/controllers/getEvents");
const PORT = 3001;

conn
  .sync({ force: false })
  .then(async () => {
    await getEvents();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
