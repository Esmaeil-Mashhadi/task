import mongoose, { model, models } from 'mongoose';

const taskModelSchema = new mongoose.Schema({
    totalHours: { type: Number }
});

const taskModel = models.task || model('task', taskModelSchema);

export default taskModel;
