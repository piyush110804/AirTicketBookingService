const {BookingService}=require('../services/index');
const {StatusCodes}=require('http-status-codes');
const bookingService=new BookingService();
 
const create =async (req,res)=>{
  try {
    const response= await bookingService.createBooking(req.body);
    return res.status(StatusCodes.OK).json({
      message:'Successfully completed booking',
      err:{},
      success:true,
      data:response
    })
  } catch (error) {
    return res.status(error.statusCode).json({
       message:error.message,
      err:error.explanation,
      success:false,
      data:{}
    });
  }
}
module.exports={
  create
}