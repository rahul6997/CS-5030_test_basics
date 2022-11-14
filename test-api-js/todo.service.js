class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        todo = { "title": "T1","description": "D1","done": false }
        this.todos.todo.push(todo);
        return this.todos;
    }

    delete_todo(id){
        // Your code here
        this.todos.todo.pop(id)
        return this.todos;
    }

    update_todo(id, todo){
        // Your code here
        this.todos.todo.map(obj => {
            if(obj.id == 1)
            {
                return{...obj, "title": "T2","description": "D2", "done": true};
            }
            return obj;
        })
        console.log(todo)
        return this.todos;
    }
}


module.exports= todoservice;