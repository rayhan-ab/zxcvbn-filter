import fs from "fs";
import path from "path";
import zxcvbnCommonPackage from "@zxcvbn-ts/language-common";

const options = {
  dictionary: {
    passwords: zxcvbnCommonPackage.dictionary.passwords.filter((password) => {
      const isNumberOnly = /^[0-9]+$/.test(password);
      return isNumberOnly ? password.length > 9 : password.length > 6;
    }),
  },
  graphs: {qwerty: zxcvbnCommonPackage.adjacencyGraphs.qwerty},
};
const directory = path.resolve();
fs.writeFileSync(
  path.resolve(directory, `dict.json`),
  JSON.stringify(options.dictionary.passwords),
  "utf8"
);
fs.writeFileSync(
    path.resolve(directory, `graph.json`),
    JSON.stringify(options.graphs),
    "utf8"
  );
