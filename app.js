console.log("RUNNING SCRIPT");

let todo_list = []
console.log(todo_list)

let run = true

while (run) {
    let user_prompt = prompt("Type 'new {TODO}', `list`, `delete {TODO}`, or `quit`");
    console.log(user_prompt);

    if (user_prompt.toLowerCase().startsWith("new")) {
        let command = user_prompt.split(" ")[0];
        let todo = user_prompt.replace(command + " ", "");
        todo_list.push(todo);
    }

    if (user_prompt.toLowerCase().startsWith("delete")) {
        let command = user_prompt.split(" ")[0];
        let todo = user_prompt.replace(command + " ", "");
        const idx = todo_list.indexOf(todo);
        if (idx > -1) {
            todo_list.splice(idx, 1);
        }
    }

    if (user_prompt.toLowerCase().startsWith("list")) {
        for (todo of todo_list) {
            console.log(todo)
        }
    }

    if (user_prompt.toLowerCase().startsWith("quit")) {
        run = false;
    }
}   

console.log("BYE BYE!")
