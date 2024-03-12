#! /usr/bin/env node

//? tutorial from "https://blog.logrocket.com/creating-a-cli-tool-with-node-js/"

import {program} from "commander"
import list from "./commands/list.js"
import add from "./commands/add.js"
import markDone from "./commands/markDone.js"
import removeT from "./commands/removeT.js"

program
        .command('list')
        .description('List all the TODO tasks')
        .action(list)

program
        .command('add <task>') //using <> for arguments being passed to the function
        .description('Add a new TODO task')
        .action(add)

program
        .command('mark-done')
        .description('Mark commands done')
        .option('-t, --tasks <tasks...>','The tasks to mark done. If not specified, all tasks will be marked done.')
        .action(markDone)

program
        .command('remove')
        .description('Remove the tasks')
        .option('-t, --tasks <tasks...>','The tasks to remove. If not specified, all tasks will be removed.')
        .action(removeT)
program.parse()