const {DataTypes}=require('sequelize');
const sequelize = require('../Connection/conn');

const User = sequelize.define('User', {
  
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Mname: {
    type: DataTypes.STRING,
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  conPass: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hobbies: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const hobbiesString = this.getDataValue('hobbies');
      return hobbiesString ? hobbiesString.split(',') : [];
    },
    set(val) {
      this.setDataValue('hobbies', val.join(','));
    },
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:true
  },
  profileImage: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  documents: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
});

// sequelize.sync()
// .then(()=>{
//     console.log("User Table Created Successfully")
// })
// .catch((error)=>{
//     console.log(error);
// })
module.exports = User;