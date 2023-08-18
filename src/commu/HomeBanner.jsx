import ThemeContext from "./context/ThemeContext"

function HomeBanner(){
    return (
        <div>

        <ThemeContext.Consumer>
            {value=>{
                return <h2>theme:{value.color}</h2>
            }}
        </ThemeContext.Consumer>
        </div>)
}
export default HomeBanner