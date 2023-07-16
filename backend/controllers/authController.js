const Admin = require('../model/admin');
const ErrorHandler = require('../Utils/errorHandler');
const catchAsyncError= require('../middleware/catchAsyncError');
const sendToken = require('../Utils/jwtToken');
const APIFeatures = require('../Utils/apiFeatures');
exports.registerAdmin = catchAsyncError(async (req, res, next)=>{
    const {name, email, password} = req.body;

  const admin = await Admin.create({
        name,
        email,
        password
    })
   sendToken(admin, 200,res);
})

exports.loginAdmin = catchAsyncError(async (req, res, next)=>{
    const {email,password}= req.body;

    //check if email or password is entered by user

    if(!email||!password){
        return next(new ErrorHandler('Please enter email or password',400))
    }

    //finding user in database
    const admin = await Admin.findOne({email}).select('+password');
    if(!admin){
        return next(new ErrorHandler('Invalid Email or Password',401));
    }

    const isPasswordMatched = await admin.comparePassword(password);
    if(!isPasswordMatched)
    {
    return next(new ErrorHandler('Invalid Email or Password',401));
    }

    sendToken(admin, 200,res);

});


//get Current Admin Profile

exports.getAdminProfile = catchAsyncError(async (req,res,next)=>{
    const admin = await Admin.findById(req.admin.id);
    res.status(200).json({
      success:true,
      admin
    });
  });

  //Logout User

  exports.logoutAdmin = catchAsyncError(async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).json({
        success:true,
        message:'Logged out successfully'
    })

});



// Change Password

exports.updatePassword = catchAsyncError(async(req,res,next)=>{
    const admin = await Admin.findById(req.admin.id).select('+password');

    
    const isMatched = await admin.comparePassword(req.body.oldPassword);
    
    if(!isMatched)
    {
        return next(new ErrorHandler('Old password is incorrect',401));
    }
    admin.password = req.body.newPassword;
    await admin.save();

    sendToken(admin,200,res);


});

