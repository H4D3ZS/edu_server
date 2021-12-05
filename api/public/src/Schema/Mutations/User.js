"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER = exports.EDIT_PROFILE = exports.UPDATE_PASSWORD = exports.USER_LOGIN = exports.CREATE_USER = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const Messages_1 = require("../TypeDefs/Messages");
const Users_1 = require("../../Entities/Users");
exports.CREATE_USER = {
    type: User_1.UserType,
    args: {
        email: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        levelStrand: { type: graphql_1.GraphQLString },
        school: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { email, name, username, levelStrand, school, password } = args;
            yield Users_1.Users.insert({
                email,
                name,
                username,
                levelStrand,
                school,
                password,
            });
            return args;
        });
    },
};
exports.USER_LOGIN = {
    type: Messages_1.MessageType,
    args: {
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { username, password } = args;
            const user = yield Users_1.Users.findOne({ username: username });
            if (!user) {
                throw new Error("USERNAME DOESNT EXIST");
            }
            const userPassword = user === null || user === void 0 ? void 0 : user.password;
            if (password === userPassword) {
                return { successful: true, message: "LOGIN SUCCESS!" };
            }
            else {
                throw new Error("WRONG PASSWORD!");
            }
        });
    },
};
exports.UPDATE_PASSWORD = {
    type: Messages_1.MessageType,
    args: {
        username: { type: graphql_1.GraphQLString },
        oldPassword: { type: graphql_1.GraphQLString },
        newPassword: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { username, oldPassword, newPassword } = args;
            const user = yield Users_1.Users.findOne({ username: username });
            if (!user) {
                throw new Error("USERNAME DOESNT EXIST");
            }
            const userPassword = user === null || user === void 0 ? void 0 : user.password;
            if (oldPassword === userPassword) {
                yield Users_1.Users.update({ username: username }, { password: newPassword });
                return { successful: true, message: "PASSWORD UPDATED" };
            }
            else {
                throw new Error("PASSWORDS DO NOT MATCH!");
            }
        });
    },
};
exports.EDIT_PROFILE = {
    type: Messages_1.MessageType,
    args: {
        newUsername: { type: graphql_1.GraphQLString },
        newLevelStrand: { type: graphql_1.GraphQLString },
        newSchool: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const { newUsername, newLevelStrand, newSchool } = args;
            const user = yield Users_1.Users.findOne({ username: newUsername });
            if (user) {
                yield Users_1.Users.update({ username: newUsername }, {
                    username: newUsername,
                    levelStrand: newLevelStrand,
                    school: newSchool,
                });
                return { successful: true, message: "PROFILE UPDATED" };
            }
        });
    },
};
exports.DELETE_USER = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const id = args.id;
            yield Users_1.Users.delete(id);
            return { successful: true, message: "DELETE WORKED" };
        });
    },
};
//# sourceMappingURL=User.js.map