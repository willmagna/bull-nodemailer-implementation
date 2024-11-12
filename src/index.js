//reference: https://www.youtube.com/watch?v=uonKHztGhko&t=1151s

import "dotenv/config";
import server from "./server.js";

server.listen(3333, () => {
  // process.stdout.write("adfads");
  console.log("Server running on localhost:3333");
});
