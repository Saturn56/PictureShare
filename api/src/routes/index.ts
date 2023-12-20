import { Router } from "express";
import auth from "./auth";


const routes = Router();

routes.use("/auth", auth);

routes.use((req, res) => res.status(404).json({ error: "Not Found" }));

export default routes;