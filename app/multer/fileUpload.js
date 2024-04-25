const multer=require('multer');

// storage function
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/upload/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }

});

// fileFilter function

const fileFilter=(req,file,cb)=>{
    if(
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'application/pdf'
    ){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
const img_upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*20
    },
    fileFilter:fileFilter
});

module.exports=img_upload;