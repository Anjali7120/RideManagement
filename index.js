'use strict';

const port = 8010;

import bodyParser from 'body-parser';
bodyParser.json();
import sqlite from 'sqlite3';
const sqlite3 = sqlite.verbose();
import App from './src/app';
    
const db = new sqlite3.Database(':memory:');

import buildSchemas from './src/schemas';

db.serialize(() => {
    buildSchemas(db);
    const app = App(db);
    app.listen(port, () => console.log(`App started and listening on port ${port}`));
});