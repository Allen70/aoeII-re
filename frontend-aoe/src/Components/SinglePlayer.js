export function SinglePlayer({handleClick}) {
    return(
        <div className="singleplayer">
            <button onClick={() => handleClick('Select')}>Main Menu</button>
            <button onClick={() => handleClick('Game')}>Play</button>

        </div>
    )
}