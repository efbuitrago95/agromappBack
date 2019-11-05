import Knex from "knex";
import {Config} from "knex";
import {Model, raw} from "objection";
import UsersModel from "../models/users.model";

export default function database() {
    Model.knex(Knex(exportConfig()));
    testDB();
}

async function testDB() {
    try {
        await UsersModel.query().select(raw("COUNT(id) AS count"));
        console.log("The database is alive");
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

function exportConfig(): Config {
    const environment = process.env.NODE_ENV || "development";
    return require("../../knexfile.js")[environment];
}
