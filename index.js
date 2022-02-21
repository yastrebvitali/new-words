




function Task(name){
    this.id         = 'id';
    this.name    = name;
    this.isSelected = false;
}

function TodoList () {
    this.tasks = [];

    this.init= function (){
        var fromStorage = localStorage.getItem('Task');
        if (fromStorage) {
            document.querySelector('.listNewWorks').innerHTML = fromStorage;
        }
        document.querySelector('.btnAdd').addEventListener('change', this.createTask);
        //document.addEventListener('click', this.action.bind(this));
    };
    this.createTask = function(task){

        this.name=document.querySelector('.newWorks').value;

    };
    this.updateTask = function(){

    };
    this.deleteTask = function(){};

    this.getAllTasks = function(){};

};

var result = new TodoList();

//console.log(new Task('luk true ' , false));
//console.log(new Task( 'morkov', true));

 //console.log('result', result.init());










