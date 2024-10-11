import express from 'express';
import 'dotenv/config';
import { connectToDatabase } from './utility/dbConnection';
import adminAuthRoutes from './routes/Admin/admin.auth.route';
import userAuthRoutes from './routes/User/user.auth.route';
import userTaskRoutes from './routes/User/assignment.route';
import adminTaskRoutes from './routes/Admin/assignment.route';



const PORT=process.env.PORT || 8000

const app= express();

app.use(express.json());
app.use("/admin",adminAuthRoutes);
app.use("/user",userAuthRoutes);
app.use("/user/task",userTaskRoutes);
app.use("/admin/task",adminTaskRoutes);


app.get('/',(req,res)=>{
    res.send('Welcome To GrowthX!');
})


app.listen(PORT,()=>{
    connectToDatabase();
    console.log(`Server listening on ${PORT}`);
})