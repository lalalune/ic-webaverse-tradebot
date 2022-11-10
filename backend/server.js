import express from "express"
import { setupRoutes } from './api/api.js';

const app = express();

setupRoutes(app);

app.listen(8081, "localhost", () => console.log("Server started on 8081 port..."));
