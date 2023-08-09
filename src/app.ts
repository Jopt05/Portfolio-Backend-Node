require('dotenv').config();

import Server from './model/server';

const server = new Server;

server.listem();
