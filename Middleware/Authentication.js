const jwt=require("jsonwebtoken")


const Authentication=(req,res,next)=>
{
    const token=req.headers.token

    jwt.verify(token,"auth",(err,decorded)=>
    {
   
        if(err)
        {
            res.send("login Frist")
        }
        else
        {
            req.body.id=decorded.id
            next()
        }
    })
}
module.exports=Authentication