import HeaderPanelStyles from "./css_modules/HeaderPanelStyles.module.css"

const GameTitle = ({ children }) => {

    return (
        <div className={HeaderPanelStyles.gameTitle}>
            { children }
        </div>
    )

}

export default GameTitle