export function MainMenu({options,handleClick}) {
    return (
        <div className="main-menu">
            <div className='menu'>
                <button onClick={() => handleClick(options[0])}>Single Player</button>
                <button onClick={() => handleClick(options[1])}>Multi Player</button>
                <button onClick={() => handleClick(options[2])}>Options</button>
                <button onClick={() => handleClick(options[3])}>Exit</button>
            </div>
        </div>
    )
}