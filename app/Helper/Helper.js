const Helper={};
const CryptoJS = require("crypto-js");

Helper.response= (status, message, data = [], res, statusCode) => {
    res.status(statusCode).json({
      status: status,
      message: message,
      data: data,
    });
  
  };

Helper.encryptPassword=(password)=>{
    var pass = CryptoJS.AES.encrypt(password,process.env.SECRET_KEY).toString();
    return pass;
};

Helper.decryptPassword=(password)=>{
    var bytes=CryptoJS.AES.decrypt(password,process.env.SECRET_KEY);
    var originalPass=bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
};

Helper.SpiltToken=(data)=>{
    const token=data;
    const string=token.split(" ");
    return {token:string[1]};
};


module.exports = Helper;

