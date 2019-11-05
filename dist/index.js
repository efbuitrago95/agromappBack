"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_1 = __importDefault(require("./config/database"));
var users_routes_1 = __importDefault(require("./routes/users.routes"));
var languages_routes_1 = __importDefault(require("./routes/languages.routes"));
var countries_routes_1 = __importDefault(require("./routes/countries.routes"));
var roles_routes_1 = __importDefault(require("./routes/roles.routes"));
var roles_users_routes_1 = __importDefault(require("./routes/roles_users.routes"));
var properties_routes_1 = __importDefault(require("./routes/properties.routes"));
var items_routes_1 = __importDefault(require("./routes/items.routes"));
var crop_items_routes_1 = __importDefault(require("./routes/crop_items.routes"));
var crops_routes_1 = __importDefault(require("./routes/crops.routes"));
// const objectionSoftDelete = require('objection-softdelete');
// objectionSoftDelete.register(objection);
database_1.default();
var app = express_1.default();
// middleware
app.use(express_1.default.json());
// CORS
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.set("port", 3000);
// Routes
app.use("/api/languages", languages_routes_1.default);
app.use("/api/countries", countries_routes_1.default);
app.use("/api/users", users_routes_1.default);
app.use("/api/roles", roles_routes_1.default);
app.use("/api/roles_users", roles_users_routes_1.default);
app.use("/api/properties", properties_routes_1.default);
app.use("/api/items", items_routes_1.default);
app.use("/api/crop_items", crop_items_routes_1.default);
app.use("/api/crops", crops_routes_1.default);
app.listen(app.get("port"), function () {
    console.log("Node server running on http://localhost:", app.get("port"));
});
