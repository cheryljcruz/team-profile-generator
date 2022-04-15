// manager card

// engineer card

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
 <div class="tile is-parent">
 <!--Employee cards-->

 </div>
 </main>
  </body>

  </html>
  `;
};

module.exports = generateHTML;