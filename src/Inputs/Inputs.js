import './Inputs.css';

export function Inputs() {
    return (
        <form className="Inputs-form" id="calc-form">
            <label className="Inputs-label" for="bill-total">Bill</label>
            <input className="Inputs-with-icon" type="text" name="bill-total" placeholder="0" />
            
            <fieldset>
                <legend className="Inputs-label">Select Tip %</legend>
                <div className="Inputs-radiobtns">
                    <input type="radio" name="tip-percent" id="five" value="5" />
                    <label className="Inputs-radiolabel" for="five">5%</label>

                    <input type="radio" name="tip-percent" id="ten" value="10" />
                    <label className="Inputs-radiolabel" for="ten">10%</label>

                    <input type="radio" name="tip-percent" id="fifteen" value="15" />
                    <label className="Inputs-radiolabel" for="fifteen">15%</label>

                    <input type="radio" name="tip-percent" id="twenty-five" value="25" />
                    <label className="Inputs-radiolabel" for="twenty-five">25%</label>

                    <input type="radio" name="tip-percent" id="fifty" value="50" />
                    <label className="Inputs-radiolabel" for="fifty">50%</label>

                    <input type="text" name="tip-percent" id="custom" placeholder="Custom" />
                </div>
                <label className="Inputs-label" for="custom">Custom</label>
            </fieldset>

            <label for="num-people">Number of People</label>
            <input className="Inputs-with-icon" type="text" name="num-people" placeholder="0" />
        </form>
    )
}