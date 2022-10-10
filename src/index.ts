import * as express from "express";
const exp = express()

// create a route for the home page
exp.use('/', (req: express.Request, res: express.Response) => res.send("hello world!"))

// start the server and listen on port 3000
exp.listen(3000, () => console.log("server started on port 3000. listening..."))