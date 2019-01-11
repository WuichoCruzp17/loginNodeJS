const authController ={};
const passport =    require('passport');
authController.getSignup =(req, res)=>{
    res.render('auth/signup');
};

authController.setAuthetication =passport.authenticate('local.signup',{
    successRedirect:'/profile',
    failureRedirect:'/signup',
    failureFlash:true
});

authController.getSignin = (req, res)=>{
    res.render('auth/signin');
};

authController.postSignin =(req, res, next)=>{
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
      })(req, res, next);
};

authController.getProfile =(req, res)=>{
    res.render('profile');
};

authController.getLogout =(req, res)=>{
    console.log('Entro');
    req.logOut();
    res.redirect('/signin');
};

module.exports = authController;