import fs from "fs";
import { parseSync } from "subtitle";

// Read file synchronously
try {
  const data = fs.readFileSync("./sample.srt", "utf8");
  const nodes = parseSync(data);
  console.log(nodes[0].data.text);
} catch (err) {
  console.error(err);
}
