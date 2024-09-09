import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tempUserSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    verificationCode: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, expires: '1h'},
});

const tempUserModel = mongoose.models.tempUser || mongoose.model('tempUser', tempUserSchema);
export default tempUserModel;