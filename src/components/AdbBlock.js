import HeaderPanelStyles from "./css_modules/HeaderPanelStyles.module.css"

const AdbBlock = () => {

    return (
        <div className={HeaderPanelStyles.adbBlockPanel}>
            <div className={HeaderPanelStyles.adbBlock}>Реклама</div>
            <div className={HeaderPanelStyles.adbBlock}>Реклама</div>
        </div>
    )

}

export default AdbBlock