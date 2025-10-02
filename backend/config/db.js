import mongoose from 'mongoose';

export const connectdb = async () => {
    await mongoose.connect('mongodb+srv://@cluster0.trhvbj5.mongodb.net/chat-app')
    .then(() => console.log("DB Connected"))
}