import chalk from "chalk";
import Conf from "conf"
const config = new Conf({ projectName: 'todo-list' })

function removeT({ tasks }) {
    // if a list is passed in argument then tasks will have values otherwise it will be undefined
    let todosList = config.get('todo-list')

    if (todosList) {
        if (tasks) {
            tasks.sort((a, b) => b - a).forEach(index => {
                if (index >= 0 && index < todosList.length) {
                    todosList.splice(index, 1)
                }
            })
        }else{
            todosList = []
        }

        config.set('todo-list', todosList)
    } else {
        console.log(
            chalk.red.bold('The task list is empty')
        )
    }

    console.log(
        chalk.green.bold('Tasks have been marked as done successfully')
    )
}

export default removeT