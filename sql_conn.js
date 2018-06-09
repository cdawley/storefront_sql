var inquirer = require("inquirer");
var mysql = require("mysql");


// connect to database and read entries

const MySqlConn = function(host, port, username, password, database) {

  this.host = host || "localhost";
  this.port = port || 3306;
  this.username = username || "root";
  this.password = password || "";
  this.database = database || "default_DB";

this.connection = mysql.createConnection({
  host: this.host,

  // Your port; if not 3306
  port: this.port,

  // Your username
  user: this.username,

  // Your password
  password: this.password,
  database: this.database
});

this.connectionion.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
})

function afterConnection() {
  this.connection.query(`SELECT * FROM ${table_name}`, function(err, res) {
    if (err) throw err;
    console.log(res); // logs all entries from products to console
    connection.end();
  });
}

};


/*
// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },




  // class example

  /*

var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "password"
    },
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which Pokemon do you choose?",
      choices: ["Bulbasaur", "Squirtle", "Charmander"],
      name: "pokemon"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("\nWelcome " + inquirerResponse.username);
      console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });
