const generatePage = (teamManager, engineerArr, internArr) => {
    
    let manager = teamManager[0];
    
    let engineerSection = engineerArr.map(engineer => {
        return `
            <div class="card mx-2" style="width: 15rem">
                <div class="card-header bg-danger text-light">
                    ${engineer.name}<br>
                    ${engineer.role}
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
                        <li class="list-group-item">GitHub Username: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>
        `;
    });

    let internSection = internArr.map((intern) => {
        return `
            <div class="card mx-2" style="width: 15rem">
                <div class="card-header bg-danger text-light">
                    ${intern.name}<br>
                    ${intern.role}
                </div>
                <div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                    </ul>
                </div>
            </div>
            `;
    })

// start manager section
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>My Team Profile</title>
</head>
<body>
    <header>
        <h1 class="col-sm-12 bg-primary text-light text-center p-4">My Team</h1>
    </header>
    <main>
        <div class="container my-5">
            <div class="row">
                <div class="card mx-2" style="width: 15rem">
                    <div class="card-header bg-danger text-light">
                        ${manager.name}<br>
                        ${manager.role}
                    </div>
                    <div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Office No. ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
                ${engineerSection}
                ${internSection}
            </div>
        </div>   
    </main> 
</body>
</html>
    `;
}
// end manager section

module.exports = generatePage;