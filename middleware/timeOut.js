module.exports=(req,res,next)=>{
    const time = req.session.admin;
    if(time){
        setTimeout(()=>{
            req.session.destroy((err)=>{
                //console.log(err);
                console.log('session destroyed')
            })
        },1000 * 60 * 60);
    }
    next()
}