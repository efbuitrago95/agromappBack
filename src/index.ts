import cors from "cors";
import express from "express";
import objection = require("objection");
import dbConnect from "./config/database";
import usersRoute from "./routes/users.routes";
import languageRoute from "./routes/languages.routes";
import countriesRoute from "./routes/countries.routes";
import categoriesRoute from "./routes/categories.routes";
import permissionsRoute from "./routes/permissions.routes";
import rolesRoute from "./routes/roles.routes";
import roles_usersRoute from "./routes/roles_users.routes";
import propertiesRoute from "./routes/properties.routes";
import itemsRoute from "./routes/items.routes";
import cropItemsRoute from "./routes/crop_items.routes";
import cropsRoute from "./routes/crops.routes";
import classificationsRoute from "./routes/classifications.routes";
import classificationsModel from "./models/classifications.model";

// const objectionSoftDelete = require('objection-softdelete');
// objectionSoftDelete.register(objection);
dbConnect();
const app = express();
// middleware
app.use(express.json());
// CORS
app.use((req, res, next) => {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.set("port", 3000);

// Routes
app.use("/api/categories", categoriesRoute);
app.use("/api/languages", languageRoute);
app.use("/api/countries", countriesRoute);
app.use("/api/users", usersRoute);
app.use("/api/roles", rolesRoute);
app.use("/api/roles_users", roles_usersRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/items", itemsRoute);
app.use("/api/crop_items", cropItemsRoute);
app.use("/api/crops", cropsRoute);
app.use("/api/classifications", classificationsRoute);

app.listen(app.get("port"), function() {
  console.log("Node server running on http://localhost:", app.get("port"));
});
