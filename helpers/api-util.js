export async function getAllTeams() {
  const response = await fetch(process.env.allTeams);
  const data = await response.json();
  return data.teams;
}

export async function getAllMatches() {
  const response = await fetch(process.env.allMatches);
  const data = await response.json();
  return data.matches;
}

export async function getAllPlayers() {
  const response = await fetch(process.env.allPlayers);
  const data = await response.json();
  return data.players;
}

export async function getPlayersByTeamName(teamName) {
  const allPlayers = await getAllPlayers();
  const players = allPlayers.find((players) => players.name === teamName);
  return players;
}
