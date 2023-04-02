import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";

const CalculatorForm = () => {
    return (
        <div>
            <form className="CalculatorForm">
                <NumberInput />
                <NumberInput />
                <Select options={[]} />
                <input type="submit" value="Spočítej" />
            </form>
            <Result />
        </div>
    );
};
export default CalculatorForm;