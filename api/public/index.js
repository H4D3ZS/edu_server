"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const express_graphql_1 = require("express-graphql");
const Schema_1 = require("./src/Schema");
const cors_1 = (0, tslib_1.__importDefault)(require("cors"));
const typeorm_1 = require("typeorm");
const Users_1 = require("./src/Entities/Users");
const Community_1 = require("./src/Entities/Community");
const main = () => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)({
        type: 'mysql',
        database: 'sql6454118',
        username: 'sql6454118',
        password: 'iD5m7bejkr',
        port: 3306,
        logging: true,
        synchronize: true,
        entities: [Users_1.Users, Community_1.Community],
        url: 'sql6.freesqldatabase.com',
    });
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 3001;
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true,
    }));
    app.listen(PORT, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
});
main().catch((err) => {
    console.log(err);
});
//# sourceMappingURL=index.js.map