import express, { Request, Response } from "express";
import {joLix} from "./ts-library";
const app = express();

app.get("/", (req: Request, res: Response): void => {
    res.json({ message: "hello from the jed lahRim library" });
});

app.listen("3001", (): void => {
    console.log("Server Running!");
});
joLix(3)