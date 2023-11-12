window.onload = init;
// Initializes the button and calls the poplulateTeams function
function init(){
    const selectButton = document.getElementById("selectButton");
    selectButton.onclick = buttonClicked;

    populateTeams();
}

function getTeamInfo() {
    return [
        {
            code: "ARI",
            name: "Arizona Cardinals",
            plays: "State Farm Stadium, Glendale, Arizona"
        },
        {
            code: "ATL",
            name: "Atlanta Falcons",
            plays: "Mercedes-Benz Stadium, Atlanta, Georgia"
        },
        {
            code: "BAL",
            name: "Baltimore Ravens",
            plays: "M&T Bank Stadium, Baltimore, Maryland"
        },
        {
            code: "BUF",
            name: "Buffalo Bills",
            plays: "Highmark Stadium, Orchard Park, New York"
        },
        {
            code: "CAR",
            name: "Carolina Panthers",
            plays: "Bank of America Stadium, Charlotte, North Carolina"
        },
        {
            code: "CHI",
            name: "Chicago Bears",
            plays: "Soldier Field, Chicago, Illinois"
        },
        {
            code: "CIN",
            name: "Cincinnati Bengals",
            plays: "Paul Brown Stadium, Cincinnati, Ohio"
        },
        {
            code: "CLE",
            name: "Cleveland Browns",
            plays: "FirstEnergy Stadium, Cleveland, Ohio"
        },
        {
            code: "DAL",
            name: "Dallas Cowboys",
            plays: "AT&T Stadium, Arlington, Texas"
        },
        {
            code: "DEN",
            name: "Denver Broncos",
            plays: "Empower Field at Mile High, Denver, Colorado"
        },
        {
            code: "DET",
            name: "Detroit Lions",
            plays: "Ford Field, Detroit, Michigan"
        },
        {
            code: "GB",
            name: "Green Bay Packers",
            plays: "Lambeau Field, Green Bay, Wisconsin"
        },
        {
            code: "HOU",
            name: "Houston Texans",
            plays: "NRG Stadium, Houston, Texas"
        },
        {
            code: "IND",
            name: "Indianapolis Colts",
            plays: "Lucas Oil Stadium, Indianapolis, Indiana"
        },
        {
            code: "JAX",
            name: "Jacksonville Jaguars",
            plays: "TIAA Bank Field, Jacksonville, Florida"
        },
        {
            code: "KC",
            name: "Kansas City Chiefs",
            plays: "Arrowhead Stadium, Kansas City, Missouri"
        },
        {
            code: "LAC",
            name: "Los Angeles Chargers",
            plays: "SoFi Stadium, Inglewood, California"
        },
        {
            code: "LAR",
            name: "Los Angeles Rams",
            plays: "SoFi Stadium, Inglewood, California"
        },
        {
            code: "MIA",
            name: "Miami Dolphins",
            plays: "Hard Rock Stadium, Miami Gardens, Florida"
        },
        {
            code: "MIN",
            name: "Minnesota Vikings",
            plays: "U.S. Bank Stadium, Minneapolis, Minnesota"
        },
        {
            code: "NE",
            name: "New England Patriots",
            plays: "Gillette Stadium, Foxborough, Massachusetts"
        },
        {
            code: "NO",
            name: "New Orleans Saints",
            plays: "Caesars Superdome, New Orleans, Louisiana"
        },
        {
            code: "NYG",
            name: "New York Giants",
            plays: "MetLife Stadium, East Rutherford, New Jersey"
        },
        {
            code: "NYJ",
            name: "New York Jets",
            plays: "MetLife Stadium, East Rutherford, New Jersey"
        },
        {
            code: "LV",
            name: "Las Vegas Raiders",
            plays: "Allegiant Stadium, Las Vegas, Nevada"
        },
        {
            code: "PHI",
            name: "Philadelphia Eagles",
            plays: "Lincoln Financial Field, Philadelphia, Pennsylvania"
        },
        {
            code: "PIT",
            name: "Pittsburgh Steelers",
            plays: "Heinz Field, Pittsburgh, Pennsylvania"
        },
        {
            code: "SF",
            name: "San Francisco 49ers",
            plays: "Levi's Stadium, Santa Clara, California"
        },
        {
            code: "SEA",
            name: "Seattle Seahawks",
            plays: "Lumen Field, Seattle, Washington"
        },
        {
            code: "TB",
            name: "Tampa Bay Buccaneers",
            plays: "Raymond James Stadium, Tampa, Florida"
        },
        {
            code: "TEN",
            name: "Tennessee Titans",
            plays: "Nissan Stadium, Nashville, Tennessee"
        },
        {
            code: "WAS",
            name: "Washington Football Team",
            plays: "FedExField, Landover, Maryland"
        }
    ];
}

function findTeamCode(code){
    const teamsCode = getTeamInfo();

    for(let team of teamsCode){
        if(team.code == code){
            return team;

        }
    }
}

function buttonClicked(event){
    event.preventDefault();
    // teamList will have control of the element in the html
    const teamList = document.getElementById("teamList")

    // gets the teams code or shortened name
    const teamCode = teamList.value
    // finds the team with that code value
    const selectedTeam = findTeamCode(teamCode);

    // display the team info
    document.getElementById("teamName").innerText = selectedTeam.name;
    document.getElementById("teamBase").innerText = selectedTeam.plays;

}

function populateTeams(){
    // teamsList will be the element for html
    const teamList = document.getElementById("teamList");
    // team will be the array 
    const teams = getTeamInfo();

    // this should take the array from team and apply it into teamsList which will make option tags and populate them with the name of the team and value of the team code
    for(let team of teams){
        const option = new Option(team.name, team.code)
        teamList.appendChild(option)
    }
}