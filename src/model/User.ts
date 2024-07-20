import mongoose , {Schema , Document} from "mongoose";

export interface user extends Document {
    username : string;
    fullname : string ;
    email : string ;
    password : string 
}

const UserSchema : Schema<user> = new Schema({
    username : {
        type : String ,
        required : true ,
        unique : true ,
        lowercase : true
    },

    fullname : {
        type : String ,
        required : true ,
        lowercase : true ,
        unique : true
    } ,
    email : {
        type : String ,
        required :true ,
        lowercase : true,
        unique : true
    },
    password : {
        type : String ,
        required : true
    } , 
},{timestamps : true})


const UserModel = (mongoose.models.User as mongoose.Model<user>) || mongoose.model<user>("User" , UserSchema)


export default UserModel ;