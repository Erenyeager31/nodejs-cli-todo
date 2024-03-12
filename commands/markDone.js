import chalk from "chalk";
import Conf from "conf"
const config = new Conf({projectName:'todo-list'})

function markDone({tasks}){
    // if a list is passed in argument then tasks will have values otherwise it will be undefined
    let todosList = config.get('todo-list')

    if(todosList){
        todosList = todosList.map((task,index)=>{
            // if something is defined
            if(tasks){
                if(tasks.indexOf(index.toString()) !== -1){
                    task.done = true
                }
            }else{
                task.done = true
            }
            return task
        })

        config.set('todo-list',todosList)
    }

    console.log(
        chalk.green.bold('Tasks have been marked as done successfully')
    )
}

export default markDone