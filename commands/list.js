import chalk from "chalk"
import Conf from "conf"
//* need to give a project name to the conf initialisation
const config = new Conf({projectName:'todo-list'});

function list() {
    //! access the list which is in the following format -->
    /*
    {
        text, #string
        done #boolean
    }
    */
    const todoList = config.get('todo-list')

    // loop through the list
    if (todoList && todoList.length) {
        // there are some entries
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
        
        todoList.forEach((task, index) => {
            // console.log(task['text'])
            if (task.done) {
                console.log(chalk.greenBright(`${index}. ${task['text']}`))
            } else {
                console.log(chalk.yellowBright(`${index}. ${task['text']}`))
            }
        })
    } else {
        // no entries in the task
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
        )
    }
}

export default list