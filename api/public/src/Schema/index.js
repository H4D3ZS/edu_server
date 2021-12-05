"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const User_1 = require("./Queries/User");
const User_2 = require("./Mutations/User");
const Community_1 = require("./Mutations/Community");
const Community_2 = require("./Queries/Community");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: User_1.GET_ALL_USERS,
        getAllPost: Community_2.GET_ALL_POSTS
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: User_2.CREATE_USER,
        userLogin: User_2.USER_LOGIN,
        editProfile: User_2.EDIT_PROFILE,
        deleteUser: User_2.DELETE_USER,
        updatePassword: User_2.UPDATE_PASSWORD,
        createCommunity: Community_1.CREATE_COMMUNITY
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
//# sourceMappingURL=index.js.map