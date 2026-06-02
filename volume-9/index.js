const fs = require("fs");

fs.writeFileSync(
  "/app/dados/arquivo.txt",
  "Dados persistidos fora do container!"
);

console.log("Arquivo criado com sucesso!");