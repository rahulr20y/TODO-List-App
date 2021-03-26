


const arr = [
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
    arr.push(req.body);

    return res.redirect('back');
}





module.exports.home = function(req,res){
    //console.log(req);
    //res.send('Cool, it is running! or is it?');

    return res.render('home',{
        title: 'TODO List App',
        tasks:arr
    });
};