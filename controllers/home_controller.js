
module.exports.home = function(req,res){
    //console.log(req);
    //res.send('Cool, it is running! or is it?');

    return res.render('home',{
        title: 'TODO List App'
    });
};