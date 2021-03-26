
const List = require('../models/list');



//dummy Task List
var arr = [
    { 
        description: 'Task 1',
        category: 'PERSONAL',
        dueDate: '2020-12-01'

    },
    { 
        description: 'Task 2',
        category: 'WORK',
        dueDate: '2020-12-02'

    },
    { 
        description: 'Task 3',
        category: 'SCHOOL',
        dueDate: '2020-12-03'

    },
    { 
        description: 'Task 4',
        category: 'CLEANING',
        dueDate: '2020-12-04'

    }
]




module.exports.createTask = function(req,res){
    //console.log(req.body);
    // arr.push(req.body);

    // return res.redirect('back');



    List.create({
        description: req.body.description,
        category: req.body.category,
        dueDate: req.body.dueDate
    },function(err,newContact){
        if(err){
            console.log('error in creating a contact');
            return;
        }

        console.log('********',newContact);
        return res.redirect('back');
    });

}


module.exports.deleteTask = function(req,res){

    // console.log(req.query);
    // let description = req.query.description;
    // let taskIndex=arr.findIndex(task => task.description == description);

    // if(taskIndex != -1){
    //     arr.splice(taskIndex,1);
    // }

    // return res.redirect('back');

    let id=req.query.id;
    List.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    });

}


module.exports.home = function(req,res){
    //console.log(req);
    //res.send('Cool, it is running! or is it?');

    // return res.render('home',{
    //     title: 'TODO List App',
    //     //tasks:arr
    //     tasks:List
    // });



        List.find({},function(err,list){
                if(err){
                    console.log('error int fetching the list from db');
                    return;
                }

                return res.render('home',{
                  title:"TODO List App",
                  task_list: list
                });

        });
};