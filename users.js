const mongoose = require("mongoose")
const post = require("./posts");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterestDB");

const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  posts:[
    {
      type:mongoose.Schema.Types.ObjectId, // reference Id of all the post created by the user
      ref:"post", //name of the post model
    }
  ],
  dp:{
    type:String,
  },
  fullName:{
    type:String,
    required:true,
  },
  UserEntry:{
    type:Date,
    default:Date.now(),
  }
})

userSchema.plugin(plm);

module.exports = mongoose.model("User",userSchema);