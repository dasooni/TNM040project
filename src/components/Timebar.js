import '../CSS/index.css'

function Timebar({visible, onTimer}) {
        window.setTimeout(() => {
                onTimer()
        }, 6000);


        return (
                <div className = "barWrapper">
                {visible && <div className="bar"> </div>}
                </div> )
}

export default Timebar;