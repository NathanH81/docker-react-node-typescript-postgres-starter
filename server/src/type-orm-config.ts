import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { User } from "./models";

const typeOrmConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User],
};

export { typeOrmConfig };
