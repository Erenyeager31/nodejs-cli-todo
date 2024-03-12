import chalk from "chalk";
import Conf from "conf"
const Config = new Conf({projectName:'todo-list'})

function add(task){
    let todoList = Config.get('todo-list')

    if(!todoList){
        // initialise if empty
        todoList = []
    }

    todoList.push({
        text:task,
        done:false
    })

    Config.set('todo-list',todoList)

    console.log(
        chalk.green.bold('Task has been added successfully')
    )
}

export default add