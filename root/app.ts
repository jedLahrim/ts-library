import express, { Request, Response } from "express";
import {body,param} from 'express-validator'
import {Link} from "./libs/links/short-link.entity";
import cors from "cors";
import dotenv from "dotenv";
import {DataSource} from "typeorm";
import {DOMAIN, HOST, POSTGRES_DATABASE, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER} from "./libs/links/domains";
import {generateShortLink} from "./short-link-generator";
import * as path from "path";
const app = express();
dotenv.config({ path: ".env", debug: true });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// use cors
app.use(cors());

export const appDataSource = new DataSource({
    type: "postgres",
    host: HOST,
    port: POSTGRES_PORT,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    entities: [
        Link
],
    synchronize: true,
});
appDataSource
    .initialize()
    .then(() => {
        app.get("", (req:Request, res:Response): void => {
            res.json({ message: "hello from the jed lahRim library" });
        });
        app.post("/generate-short-link",body('originalUrl'), async (req: Request, res: Response) => {
            const {originalUrl} =req.body
            const shortLink= await generateShortLink(originalUrl)
            res.json({shortLink:shortLink})
        });
        app.get("/:code",param('shortLink'), async (req: Request, res: Response) => {
            const {code} =req.params
            const shortLink = DOMAIN(code)
            const link = await Link.findOne({where:{shortUrl:shortLink}});
            if (!link){
               return res.json({NOT_FOUND:'NOT_FOUND_LINK'});
            }
            const url = link.originalUrl
            // Redirect to main url
            res.redirect(url.includes('https')?url:`https://${url}`);
        });
        app.listen(80, (): void => {
            console.log("Server Running!");
        });
    })  .catch((err) => {
    console.log(err);
});