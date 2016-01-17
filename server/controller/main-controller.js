/**
 * Created by jin on 2016. 1. 17..
 */


function MainController () {

}

MainController.prototype.init = function(req,res){
    res.render(200,'index.ejs');
};

module.exports = new MainController();