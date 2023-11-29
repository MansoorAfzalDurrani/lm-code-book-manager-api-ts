import * as dotenv from "dotenv";


dotenv.config();

export const CONFIG = {
nodeEnv: process.env.Node_ENV??"dev",// copy code
port: process.env.PORT ?? 3030,
dbName: process.env.DB_NAME ?? "sqlite::memory:",// is it right here
dbUserName: process.env.DB_USERNAME ?? "",
dbPassword: process.env.DB_PASSWORD ?? "",
dbHost: process.env.DB_HOST ?? "localhost",
dbDialect: process.env.DB_DIALECT ?? "sqlite",
dbPort:process.env.DB_PORT??"5432" // copy code 
} as const;