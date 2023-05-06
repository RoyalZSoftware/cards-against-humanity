import LeaderBoard from "../LeaderBoard/LeaderBoard";


const players = [
    {
      name: "Luca",
      score: 0
    },
    {
      name: "Adnan",
      score: 10
    }
  ]

export default function LobbyPage() {
    return (
        <LeaderBoard players={players}></LeaderBoard>
    )
}