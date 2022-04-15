// manager card
const generateManager = function (manager) {
  return `
    <section class="tile is-child box is-link">
    <div class="title">${manager.name}</div>
    <div class="subtitle">Manager</div>
    </section>
    <div class="has-text-centered">
    <p class="id">ID: ${manager.id}</p>
    <p class="email">Email: <a href="mailto:${manager.email}"></a>${manager.email}</p>
    <p class="office">Office Number: ${manager.officeNumber}</p>
    </div>
    `;
};
// engineer card
const generateEngineer = function (engineer) {
  return `
    <section class="tile is-child box is-link">
    <div class="title">${engineer.name}</div>
    <div class="subtitle">Engineer</div>
    </section>
    <div class="has-text-centered">
    <p class="id">ID: ${engineer.id}</p>
    <p class="email">Email: <a href="mailto:${engineer.email}"></a>${engineer.email}</p>
    <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    `;
};
// intern card

// push array to page

// generated html page
// add employee cards into function once complete
const generateTeam = function () {
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
