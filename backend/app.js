import express from 'express'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import vendorRoutes from './routes/vendors.js'
import orderRoutes from './routes/orders.js'
import userRoutes from './routes/users.js'
import env from 'dotenv'
env.config()
import cors from 'cors'
const app = express();
const corsOptions = {
    origin: true
}
app.use(cors())
app.use(express.json());

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/orders', orderRoutes);


const PORT = process.env.PORT;
// console.log(PORT)
app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
