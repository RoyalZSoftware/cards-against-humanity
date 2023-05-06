import { Crown } from 'iconoir-react';

function LeadBoardEntry({player}) {
    return (<tr>
        <td><Crown/></td>
        <td>{player.name}</td>
        <td>{player.score}</td>
    </tr>);
}


export default function LeaderBoard({ players }) {
    

    return (
        <table>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            {players.map(player => <LeadBoardEntry player={player}></LeadBoardEntry>)}
        </table>
    )
}
