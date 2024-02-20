import express, { type Request, type Response, type Application, type NextFunction } from 'express';
import "dotenv/config";

const app: Application = express();
const port: number = process.env.PORT != null ? parseInt(process.env.PORT) : 3000;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
})