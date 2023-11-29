//import { Sequelize } from "sequelize";

// TODO: This should be external config
import { Dialect, Sequelize } from "sequelize";
import {  CONFIG } from "../config";

export let sequelize:Sequelize;
if(CONFIG.nodeEnv!="dev"){
  const connString =
"postgres://bookshopuser:super-secret-password@127.0.0.1:5432/bookshop";

  sequelize=new Sequelize(
    connString  
  );
}else{
  console.log("Coudnot save in database");
  sequelize = new Sequelize("sqlite::momory:");
}






// export const sequelize = new Sequelize("sqlite::memory:");

// if (process.env.NODE_ENV !== 'test') {
//   sequelize = new Sequelize(process.env.DB_NAME ??
//   'MISSING_DB_NAME_CONFIG',
//   process.env.DB_USERNAME ??
//   'MISSING_DB_USERNAME_CONFIG',
//   process.env.DB_PASSWORD ??
//   'MISSING_DB_PASSWORD_CONFIG', {
//   host: process.env.DB_HOST ?? 'MISSING_DB_HOST_CONFIG',
//   port: parseInt(process.env.DB_PORT as string) ??
//   "MISSING_DB_PORT_CONFIG",
//   dialect: (process.env.DB_DIALECT as Dialect) ??
//   'postgres',
//   });
//   }
  
