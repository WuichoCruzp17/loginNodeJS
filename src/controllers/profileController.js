const pool =    require('../database');
const {isLoggedIn} =    require('../lib/auth');
const helpers = require('../lib/helpers');
const profileController ={};

profileController.getProfileFinById =async (req, res)=>{
    console.log(req.params.id);
     const rows= await pool.query('SELECT * FROM users WHERE id = ?',[req.params.id]);
    res.status(200).json({success:'Exito osy'});
};

profileController.save = async(req, res)=>{
    const {id, fullname, username, password} = req.body;
    const update ={
        fullname,
        username,
        password:await helpers.encryptPassword(password)
    };
    const result = await pool.query('UPDATE users set ? WHERE id = ?',[update, id]);
    if(result){
        res.status(200).json({success:'Exito Save'});
    }else{res.status(500).json({error:'Error Servicio'});}
};

module.exports = profileController;