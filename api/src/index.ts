import * as express from "express";
import routes from "./routes";


const app = express()


let port = 3000;
if (process.env.NODE_ENV == "development") {
    port = 3000;
}

app.use("/api", routes);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
