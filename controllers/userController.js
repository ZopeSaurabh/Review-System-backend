import User from "../models/User.js"

export const createAdmin= async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };





export const createAlumni= async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Alumni",
    });

    const savedUser = await user.save();

    res.json({
      savedUser,
      message: "Alumni Cretaed Succesfully"
    });

  } catch (error) {
    res.json({
      error: "Error occured",
    });

    console.log(error)
    }
  };



export const createStudent= async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = new User({
      name,
      email,
      password,
      role: "Student",
    });

    const savedUser = await user.save();

    res.json({
      savedUser,
      message: "Alumni Cretaed Succesfully"
    });

  } catch (error) {
    res.json({
      error: "Error occured",
    });

    console.log(error)
    }
  };

export const getAllUser=async(req,res)=>{
  try {
    const getusers=await User.find()
    res.json({
      getusers
    })
  } catch (error) {
    res.json({
      error: "Error occured",
    })
    console.log("error");
  }
}