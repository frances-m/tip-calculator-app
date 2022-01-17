import './Result.css'

export function Result(props) {
    return (
        <div className="Result-container">
            <div className="Result-line">
                <p className="Result-title">Tip Amount <span className="Result-span">/ person</span></p>
                <p className="Result-amounts">${props.tipAmount}</p>
            </div>
            <div className="Result-line">
                <p className="Result-title">Total <span className="Result-span">/ person</span></p>
                <p className="Result-amounts">${props.totalPrice}</p>
            </div>
            <button onClick={props.resetForm} className="Result-resetbtn" type="reset" form="calc-form">Reset</button>
        </div>
    )
}