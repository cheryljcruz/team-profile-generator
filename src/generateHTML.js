// manager card
const generateManager = function (manager) {
  return `
    <section class="tile is-child box is-link">
    <div class="title">${manager.name}</div>
    <div class="subtitle">Manager</div>
    
    <div class="has-text-centered">
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="office">Office Number: ${manager.officeNumber}</p>
    </div>
    </section>
    `;
};
// engineer card
const generateEngineer = function (engineer) {
  return `
    <section class="tile is-child box is-link">
    <div class="title">${engineer.name}</div>
    <div class="subtitle">Engineer</div>
    
    <div class="has-text-centered">
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    </section>
    `;
};
// intern card
const generateIntern = function (intern) {
  return `
    <section class="tile is-child box is-link">
    <div class="title">${intern.name}</div>
    <div class="subtitle">Intern</div>
    
    <div class="has-text-centered">
    <p class="id">ID: ${intern.id}</p>
    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="school">School: ${intern.school}</p>
    </div>
    </section>
    `;
};
// push array to page
generateHTML = (data) => {
  genArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerTile = generateManager(employee);
      genArray.push(managerTile);
    }

    if (role === "Engineer") {
      const engineerTile = generateEngineer(employee);
      genArray.push(engineerTile);
    }

    if (role === "Intern") {
      const internTile = generateIntern(employee);
      genArray.push(internTile);
    }
  }

  const teamTiles = genArray.join("");

  const generatePage = generateTeam(teamTiles);
  return generatePage;
}
// generated html page

const generateTeam = function (teamTiles) {
  return `
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
      <title>Team Profile Generator</title>
  </head>
  <body> 
  <header class="hero is-med is-primary">
  <div class="hero-body">
      <h1 class="title is-1 has-text-centered">
          My Team
      </h1>
  </div>
 </header>

 <main class="tile is-ancestor box">
 <div class="tile is-parent has-text-centered">
 <!--Team Tiles-->
  ${teamTiles}
 </div>
 </main>
  </body>

  </html>
  `;
};

module.exports = generateHTML;
