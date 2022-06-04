import express from "express";
import loanRoutes from "./routes/loanRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import debtorRoutes from "./routes/debtorRoutes";
import typesRoutes from "./routes/typesRoutes";

import cors from 'cors';
const server = express();
const port = 4000;


server.set('port',port);
server.use(cors());
server.use(express.json());
server.use('/loans',loanRoutes);
server.use('/payments',paymentRoutes);
server.use('/debtors',debtorRoutes);
server.use('/types',typesRoutes);

server.listen(port, () => {
    console.log(`server listening on port: ${port}`);
});