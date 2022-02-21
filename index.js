




function NewWorks(name){
    this.id         = 'id';
    this.name    = name;
    this.isSelected = false;
}

function TodoList () {

    this.NewWorks = [];

    /*----------------------------------------------------*/
    this.createTask = function(NewWorks){
        document.querySelector('.newWorks').value
        var result= new newWorks(document.querySelector('.newWorks').value);
        return   result;
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

var btnCases= querySelector('.btnAdd');

btnCases.addEventListener('click', () => {
    tasks.push(new Task(enter_cases_input.value));

});




enter_cases_input.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        tasks.push(new Task(enter_cases_input.value));

    }
});

var result = new TodoList();

//console.log(new Task('luk true ' , false));
//console.log(new Task( 'morkov', true));

 console.log('result', result.createTask());










