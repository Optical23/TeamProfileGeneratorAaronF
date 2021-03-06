//html templates using employees data to fill in using template literals
function profileTemplates (employees) {

    //builds html if manager map has data in employees
    const manager = employees.manager.map(function(employees) {
        return managerCards = `
        <div class="card border col-sm m-4 p-0" style="min-width: 18rem; max-width:max-content;">
            <div class="bg-primary justify p-2 text-light">
                <h2>${employees.name}</h2>
                <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                </svg>
                Manager
                <h4>
            </div>
            <div class="bg-light p-5">
                <p class="border-0" style="font-size: large">Id: ${employees.id}</p>
                <p class="border-0" style="font-size: large">Email: <a href="mailto:${employees.email}">${employees.email}</a></p>
                <p class="border-0 mb-0">Office Number: ${employees.officeNumber}</p>
            </div>
        </div>
        `
    });
    //builds html if engineer map has data in employees
    const engineer = employees.engineer.map(function(employees) {
        return engineerCards = `
        <div class="card border col-sm m-4 p-0" style="min-width: 18rem; max-width:max-content;">
            <div class="bg-primary justify p-2 text-light">
                <h2>${employees.name}</h2>
                <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cpu" viewBox="0 0 16 16">
                <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                </svg>
                Engineer
                <h4>
            </div>
            <div class="bg-light p-5">
                <p class="border-0" style="font-size: large">Id: ${employees.id}</p>
                <p class="border-0" style="font-size: large">Email: <a href="mailto:${employees.email}">${employees.email}</a></p>
                <p class="border-0 mb-0"> Github Profile: <a href="https://github.com/${employees.github}" target="_blank">${employees.github}</a></p>
            </div>
        </div>
        `
    })
    //builds html if intern map has data in employees
    const intern = employees.intern.map(function(employees) {
        return internCards = `
        <div class="card border col-sm m-4 p-0" style="min-width: 18rem; max-width:max-content;">
            <div class="bg-primary justify p-2 text-light">
                <h2>${employees.name}</h2>
                <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                </svg>
                Intern
                <h4>
            </div>
            <div class="bg-light p-5">
                <p class="border-0" style="font-size: large">Id: ${employees.id}</p>
                <p class="border-0" style="font-size: large">Email: <a href="mailto:${employees.email}">${employees.email}</a></p>
                <p class="border-0 mb-0"> University: ${employees.school}</p>
            </div>
        </div>`
    })
    //runs each function to make every employee type
    return manager + engineer + intern;
}
//The export returns a string with a template literal to push the team profiles
module.exports = employees => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css">
            <title>Team Profiles</title>
        </head>
        <body>
            <header style="height:5em" class="d-flex align-items-center justify-content-center bg-danger mb-5 ">
                <h1 class="text-light m-0">Team Profiles</h1>
            </header>
                <div class="container d-flex flex-wrap justify-content-center">
                    <div class="row col-10 flex-wrap justify-content-center">
                        ${profileTemplates(employees)}
                    </div>
                </div>
        </body>
        </html>    
        `
}
