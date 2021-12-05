import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./src/Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./src/Entities/Users";
import { Community } from "./src/Entities/Community";

const main = async () => {
  await createConnection({
    type: 'mysql',
    database: 'sql6454118',
    username: 'sql6454118',
    password: 'iD5m7bejkr',
    port: 3306,
    logging: true,
    synchronize: true,
    entities: [Users, Community],
    url: 'sql6.freesqldatabase.com',
  });

  const app = express();
  const PORT = process.env.PORT || 3001;
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
