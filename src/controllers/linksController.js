const pool =    require('../database');
const {isLoggedIn} =    require('../lib/auth');
const linksController ={};

linksController.getAdd =(req, res)=>{
    res.render('links/add');
};


linksController.save =async (req, res)=>{
    const {title, url, description} =   req.body;
    const newLink={
        title,
        url,
        description,
        user_id:req.user.id
    };
    await pool.query('INSERT INTO links set ?',[newLink]);
    req.flash('success','Liknk saved successfully');
    res.redirect('/links/');
};

linksController.getLinks =async (req, res)=>{
    const links = await pool.query('SELECT * FROM links WHERE user_id =?',[req.user.id]);
    console.log(links);
    res.render('links/list', {links});
};

linksController.delete = async(req, res)=>{
    const {id} =req.params;
       await pool.query('DELETE FROM links WHERE id= ?',[parseInt(id)]);
       req.flash('success','Links removed succesfully');
       res.redirect('/links');
};

linksController.getLinksFinById =async(req, res)=>{
    const {id} =req.params;
    const link =    await pool.query('SELECT*FROM links WHERE id =?',[id]);
    console.log(link);
    res.render('links/edit',{link:link[0]});
};

linksController.update =async(req, res)=>{
    const {id} = req.params;
    const {title, description, url} = req.body;
    const newLink ={
        title, description, url
    };
    const result =   await pool.query('UPDATE links set ? WHERE id =?', [newLink, id]);
    //console.log(result);
    req.flash('success','Links updated  succesfully');
    res.redirect('/links');
};

module.exports = linksController;
