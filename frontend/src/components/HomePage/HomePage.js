import { AddCircle, ArrowRightCircle, Check } from 'iconoir-react'
import { useState } from 'react'
import Input from '../Input/Input'
import "./HomePage.css"

function JoinGame() {
    return (
        <div className='join-game'>
            <Input placeholder="name"></Input>
            <Input placeholder="gamecode"></Input>
            <button><Check></Check></button>
        </div>
    )
}

function CreateGame() {
    return (
        <div className='create-game'>
            <Input placeholder="Name"></Input>
            <button><Check></Check></button>
        </div>
    )
}

export default function HomePage() {
    const [action, setAction] = useState('none')

    if (action === 'join') {
        return <JoinGame></JoinGame>
    } else if (action === 'create') {
        return <CreateGame></CreateGame>
    }

    return (
        <div className="homePage">
            <div className="gameOptions">
                <button onClick={() => setAction('join')}>
                    <ArrowRightCircle color="black" height={15} width={15} />
                    join game
                </button>
                <button onClick={() => setAction('create')}>
                    <AddCircle color="black" height={15} width={15} /> create
                    game
                </button>
            </div>
        </div>
    )
}
