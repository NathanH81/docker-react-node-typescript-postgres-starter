import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { typeOrmConfig } from "./type-orm-config";
import { UserResolver } from "./resolvers/UserResolver";

const GRAPHQL_PORT = 40000;

async function main() {
  await createConnection(typeOrmConfig);
  const schema = await buildSchema({ resolvers: [UserResolver] });
  const server = new ApolloServer({
    schema,
  });
  await server.listen(GRAPHQL_PORT);
  console.log(`GraphQL server has started on port ${GRAPHQL_PORT}!`);
}

main();
