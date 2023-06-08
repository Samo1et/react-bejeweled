// COMPONENTS
import GameWrapper from "./GameWrapper"
import HeaderPanel from "./HeaderPanel"
import Board from "./Board"
import AdbBlock from "./AdbBlock"
import Score from "./Score"
import RestartGame from "./RestartGame"
import GameTitle from "./GameTitle"

// CUSTOM HOOKS
import useGame from "../hooks/useGame"
import useGameOver from "../hooks/useGameOver"

// BUILT IN HOOKS
import { useReducer } from "react"

// REDUCER FUNCTION & STATE
import { initialState, handleState } from "../business/jokerState"


const Game = () => {

    const [board, setBoard, score, setScore] = useGame()
    const [jokerState, dispatchJokerAction] = useReducer(handleState, JSON.parse(localStorage.getItem("jokerState")) || initialState)
    const [gameOver, setGameOver] = useGameOver(board, jokerState)

    return (
        <div>
   
            <GameWrapper gameState={gameOver}>
                <AdbBlock />
                <GameTitle >Три в ряд</GameTitle>
                <HeaderPanel>

                    <Score score={score} />
                    {/* <ButtonPanel jokers={jokerState} dispatchJokerAction={dispatchJokerAction} /> */}
                    <RestartGame
                        resetBoard={setBoard}
                        resetScore={setScore}
                        resetJokers={dispatchJokerAction}
                        resetGameOver={setGameOver} />
                </HeaderPanel>
                <Board
                    board={board}
                    setBoard={setBoard}
                    jokers={jokerState}
                    dispatchJokerAction={dispatchJokerAction}
                    gameOver={gameOver} />

            </GameWrapper>
        </div>
    )
}

export default Game