// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

const fs=require('fs');
const inquirer=require('inquirer');
inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the name of your project',
        },
        {
            type:'input',
            name:'purpose',
            message:'What was the purpose of your project and what did you learn',
        },
        {
            type:'input',
            name:'technologies',
            message:'What technologies did you incorporate',
        },
        {
            type:'input',
            name:'collaborators',
            message:'Who were the collaborators',
        },
        {
            type:'input',
            name:'license',
            message:'What is the license',
        }
    ]).then((data) =>{
        fs.writeFile('index.html',generateMarkdown(data), (err) =>
            err ? console.log(err)  : console.log('Generating HTML')
        );
    });



// TODO: Create a function to write README file    
    function generateMarkdown(data){
    return `  <!DOCTYPE html>
    <html lang="en">
    <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
       <title>Document</title>
    </head>
    <body>
    <div class="container">
       <div class="container" text-white bg-dark mb-3" style="max-width: 18rem;">
           <h2 class="hero">${data.name}</h2>
           <div class="card-body">
           <h2 class="card-header">Purpose and Take-aways</h2>
                <p class="card-text">${data.purpose}</P>
            <h2 class="card-header">Technologies</h2>
                <p class="card-text">${data.technologies}</P>
            <h2 class="card-header">Collaborators</h2>
                <p class="card-text">${data.collaborators}</p>
            <h2 class="card-header">License</h2>
                <p class="card-text">${data.license}</p>
           </div>
         </div>
         </div>
    </body>
    </html>`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

