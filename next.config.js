const { PHASE_DEVELOPMENT_SERVER } = require("next/dist/shared/lib/constants")

module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        allTeams: "http://localhost:3000/api/teams",
        allMatches: "http://localhost:3000/api/matches",
        allPlayers: "http://localhost:3000/api/teams/teamplayers",
        mongodb_username: "vivekchowdary",
        mongodb_password: "vivek77",
        mongodb_cluster: "cluster0",
        mongodb_database: "tournament"
      }
    }
  }

  return {
    env: {
      allTeams: "http://vivekstournament/api/teams",
      allMatches: "http://vivekstournament/api/matches",
      allPlayers: "http://vivekstournament/api/teams/teamplayers",
      mongodb_username: "vivekchowdary",
      mongodb_password: "vivek77",
      mongodb_cluster: "cluster0",
      mongodb_database: "tournament"
    }
  }
}
