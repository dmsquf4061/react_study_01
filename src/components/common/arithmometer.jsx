import '../../App.css'

function Arithmometer () {
    return (
        <>
            <div className="Arithmometer">
                <div className="inputText">
                    <input type="text" />
                </div>
                <ul className="inputBtn">
                    <li>
                        <button>%</button>
                        <button>CE</button>
                        <button>C</button>
                        <button>←</button>
                    </li>
                    <li>
                        <button>1/x</button>
                        <button>x²</button>
                        <button>√</button>
                        <button>÷</button>
                    </li>
                    <li>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>-</button>
                    </li>
                    <li>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>+</button>
                    </li>
                    <li>
                        <button>+/-</button>
                        <button>0</button>
                        <button>.</button>
                        <button className="colorBtn">=</button>
                    </li>
                </ul>
            </div>
        </>
    );    
}

export default Arithmometer;