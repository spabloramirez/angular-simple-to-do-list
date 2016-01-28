angular.module('todoApp', [])
    .controller('TodoListController', function () {
        var todoList = this;

        todoList.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        todoList.addTodo = function(){
            console.log('test');
        }
        todoList.remaining = function(){
            return 3;
        }
    })
