import { Router } from "express";
import lessonRouter from "./lesson/lesson.router";
import mongoose from "mongoose";
import virtualIRouter from "./virtual_id/virtual_id.router";
import pointerRouter from "./point/point.router";
import learnerProgressRouter from "./learner_progress/learner_progress.router";

const MONGO_URL: string = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017/lesson_points_tracker';

const mongoDbRouter = Router();

mongoDbRouter.use("/pointer", pointerRouter);

mongoDbRouter.use("/lesson", lessonRouter);

mongoDbRouter.use("/virtualId",virtualIRouter);

mongoDbRouter.use("/learnerProgress", learnerProgressRouter);

// MongoDb connection
export function mongodbConnection() {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URL).then(() => {
        console.log("\n*************MONGODB connected**************\n");
    }).catch(error => {
        console.log("unable to connect with database:", error);
    });
}

export default mongoDbRouter;