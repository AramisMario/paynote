import express from "express";
import loanRoutes from "./routes/loanRoutes";

const server = express();
const port = 3000;

server.set('port',port);
server.use(express.json());
server.use('/loans',loanRoutes);

server.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});