const asyncHandler = require("express-async-handler")
const User = require("../models/useModel")

// add user 
const addUser =async (req, res) => {
     try{
      console.log("enter")
        // get request body 
        const request = req?.body;

        if(!request) return res.status(200).json({
          message:"Enter Valid Detail To Proceed Further.",
          data:[]
        })

        if(request){
          var name = request?.name;
          var createdOn = request?.createdOn;
          var gender= request?.gender;
          var dob = request?.dob;
          var city= request?.city;
          var state = request?.state;
          var pincode = request?.pincode;
          var modifiedOn = request?.modifiedOn;
        }

        // make pay load obj 
        const Payload_obj = {
          name:name,
          createdOn:createdOn,
          gender:gender,
          dob:dob,
          city:city,
          state:state,
          pincode:pincode,
          modifiedOn:modifiedOn
        }

        if(Payload_obj){
          var user_created = await User.create(Payload_obj);
          if(user_created){
            return res.status(200).json({
              message:"User Created Successfully.",
              data:[]
            })
          }
          else{
            return res.status(200).json({
              message:"User Creation Failed.",
              data:[]
            })
          }
        }
     }
     catch(err){
      return res.status(200).json({
        error:err
      })
     }
}

//get User
const getUser = asyncHandler(async (req, res) => {
   try{
        const user = await User.find().lean().exec();
        if(user){
          return res.status(200).json({
            message:"User Get Successfully.",
            Data:user
          })
        }
        else{
          return res.status(200).json({
            message:"User List Not Found",
            data:[]
          })
        }
   }
   catch(err){
    return res.status(200).json({
      error:err
    })
   }
});

//update User
const updateUser = asyncHandler(async (req, res) => {
   try{
      const user_id = req.params.id;

      if(!user_id) return res.status(200).json({
        message:"Enter Valid Detail To Proceed Further.",
        data:[]
      })
      
      const update_request = req?.body;

      const user_updated = await User.findByIdAndUpdate(user_id,update_request);

      if(user_updated){
        return res.status(200).json({
          message:"User Updated Successfully.",
          Data:[]
        })
      }
      else{
        return res.status(200).json({
          message:"User Updation Failed.",
          data:[]
        })
      }

   }
   catch(err){
    return res.status(200).json({
      error:err
    })
   }
})
  
// delete user 

const delete_User = async(req,res)=>{
  try{
      const deleted_id = req.params.id;
      if(!deleted_id) return res.status(200).json({
        message:"Enter Valid Detail To Proceed Further.",
        data:[]
      })
      
      const user = await User.findByIdAndDelete(deleted_id)

      if(user){
        return res.status(200).json({
          message:"User Deleted Successfully.",
          Data:[]
        })
      }
      else{
        return res.status(200).json({
          message:"User Deletion Failed.",
          data:[]
        })
      }

  }
  catch(err){
    return res.status(200).json({
      error:err
    })
  }
}

// find single user 

const get_single_User = async(req,res)=>{
  try{
      const get_id = req.params.id;
      if(!get_id) return res.status(200).json({
        message:"Enter Valid Detail To Proceed Further.",
        data:[]
      })
      
      const user = await User.findById(get_id)

      if(user){
        return res.status(200).json({
          message:"User Get Successfully.",
          Data:user
        })
      }
      else{
        return res.status(200).json({
          message:"User Not Found.",
          data:[]
        })
      }

  }
  catch(err){
    return res.status(200).json({
      error:err
    })
  }
}


module.exports = {
  addUser,
  getUser,
  updateUser,
  delete_User,
  get_single_User
};
