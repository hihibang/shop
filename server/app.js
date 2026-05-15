import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routes/products.js'

dotenv.config()

const app = express();
const PORT = process.env.SERVER_PORT || 9000;

//미들웨어 -> 공동작업 처리
app.use(cors());
app.use(express.json())

//라우터 
app.use('/products', productRouter)

app.listen(PORT, ()=>{
    console.log(`🚀 Server => ${PORT}`);
})
