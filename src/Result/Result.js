import './Result.css'

export function Result() {
    return (
        <div className="Result-container">
            <div className="Result-line">
                <p className="Result-title">Tip Amount <span className="Result-span">/ person</span></p>
                <p className="Result-amounts">$4.27</p>
            </div>
            <div className="Result-line">
                <p className="Result-title">Total <span className="Result-span">/ person</span></p>
                <p className="Result-amounts">$32.79</p>
            </div>
            <button className="Result-resetbtn" type="reset" form="calc-form">Reset</button>
        </div>
    )
}