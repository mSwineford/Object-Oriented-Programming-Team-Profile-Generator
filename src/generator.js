const generator = team => {
    const createIntern = intern => {
        return `
            <div class="card card-intern">
                <div class="intern-card-header">
                    <h3 class="card-title">${intern.getName()}</h3>
                    <h4 class="card-title">${intern.getRole()}</h4>
                </div>
                <div class="intern-card-body">
                    <ul class="list-group">
                        <p>ID: ${intern.getId()}</p>
                        <p>Email: ${intern.getEmail()}</p>
                        <p>School: ${intern.getSchool()}</p>
                    </ul>
                </div>
            </div>
        `;
    };
    const createEngineer = engineer => {
        return`
            <div class="card card-engineer">
                <div class="eng-card-header">
                    <h3 class="card-title">${engineer.getName()}</h3>
                    <h4 class="card-title">${engineer.getRole()}</h4>
                </div>
                <div class="eng-card-body">
                    <ul class="list-group">
                        <p>ID: ${engineer.getId()}</p>
                        <p>Email: ${engineer.getEmail()}</p>
                        <p>Github: ${engineer.getGithub()}</p>
                    </ul>
                </div>
            </div>
        `;
    };
    const createManager = manager => {
        return`
            <div class="card card-manager">
                <div class="manager-card-header">
                    <h3 class="card-title">${manager.getName()}</h3>
                    <h4 class="card-title">${manager.getRole()}</h4>
                </div>
                <div class="manager-card-body">
                    <ul class="list-group">
                        <p>ID: ${manager.getId()}</p>
                        <p>Email: ${manager.getEmail()}</p>
                        <p>Office Number: ${manager.getOfficeNumber()}</p>
                    </ul>
                </div>
            </div>
        `;
    };

    const htmlArray = [];

    htmlArray.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => createIntern(intern))
    );
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    htmlArray.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => createManager(manager))
        .join("")
    );
    return htmlArray.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="eng">

    <head>
        <meta charset="UTF-8" />
        <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="styles.css">
        <title>Team Profile</title>
    </head>
        
    <body>
        <div class="container">
            <div class="jumbotron">
                <h1 class="text-center">
                    Team Profile
                </h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="justify-content-center">
                        ${generator(team)}
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};