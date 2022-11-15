import mysql from "mysql2";
import inquirer from "inquirer";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "sakila"
})

// Custom promise example
// const myQuery = (sql) => {
//     return new Promise((resolve, reject) => {
//         connection.query(sql, function (err, results) {
//             if (err) {
//                 reject(err)
//             }
//             resolve(results)
//         }
//         )
//     })
// }

const menuPrompt = async () => {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: ["Search actors", "Add an actor", "Update an actor", "Exit"]
        }
    ])

    if (answers.action === "Seach actors"){
        searchActors()
    } else if (answers.action === "Add an actor"){
        addActor()
    } else if (answers.action === "Update an actor"){
        updateActor()
    } else {
        process.exit(0)
    }
}

menuPrompt();

