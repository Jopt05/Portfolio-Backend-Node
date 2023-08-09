"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const server_1 = require("./model/server");
const server = new server_1.default;
server.listem();
