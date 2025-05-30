import "./styles/index.css"
import Button from "shared/components/Button";

function App() {
    return (
            <div className="tracking-[1] ml-5">
                <h1>hello world</h1>
                <Button variant="contained">Button</Button>
                <br/>
                <br/>
                <Button variant="outlined">Button</Button>
            </div>
    )
}

export default App
