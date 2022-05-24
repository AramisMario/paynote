import express from "express";
import loanRoutes from "./routes/loanRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import cors from 'cors';
const server = express();
const port = 4000;


server.set('port',port);
server.use(cors());
server.use(express.json());
server.use('/loans',loanRoutes);
server.use('/payments',paymentRoutes);

server.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});