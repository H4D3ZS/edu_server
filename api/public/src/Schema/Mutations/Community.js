"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_COMMUNITY = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const Community_1 = require("../../Entities/Community");
const Community_2 = require("../TypeDefs/Community");
exports.CREATE_COMMUNITY = {
    type: Community_2.CommunityType,
    args: {
        id: { type: graphql_1.GraphQLID },
        comment: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { id, comment } = args;
            yield Community_1.Community.insert({
                id,
                comment
            });
            return args;
        });
    },
};
//# sourceMappingURL=Community.js.map