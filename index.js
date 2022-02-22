




function NewWorks(name){
    this.id         = 'id';
    this.name    = name;
    this.isSelected = false;
}

//console.log('NewWorks.name=',new NewWorks('micha' ));

function TodoList () {

    this.Task = [];

    /*----------------------------------------------------*/
    this.createTask = function(NewWorks){
        this.Task.push(  document.querySelector('.newWorks').value);
        return this.Task;

    };
    /*----------------------------------------------------*/
    this.init= function (){
        var fromStorage = localStorage.getItem('NewWorks');
        if (fromStorage) {
            document.querySelector('.listNewWorks').innerHTML = fromStorage;
        }
        document.querySelector('.btnAdd').addEventListener('change', this.createTask);
        //document.addEventListener('click', this.action.bind(this));
    };
    /*----------------------------------------------------*/
    this.updateTask = function(){

    };
    this.deleteTask = function(){};

    this.getAllTasks = function(){};

};



let todoList=new TodoList();
console.log('todoList',todoList);
let btnCases=document.querySelector('.btn');
console.log('todoList.createTask()', todoList.createTask());

btnCases.addEventListener('click',todoList.createTask());







/*enter_cases_input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        tasks.push(new Task(enter_cases_input.value));

    }
});*/

//var result = new TodoList();

//console.log(new Task('luk true ' , false));
//console.log(new Task( 'morkov', true));












