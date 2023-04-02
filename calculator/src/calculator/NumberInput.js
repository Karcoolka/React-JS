let NumberInput = () => {

    return (
    //htmlFor = JSX jej přeloží jako HTML atribut for
        <label htmlFor="x">
            První číslo
            <input
                id="x"
                type="number"
                name="x"
                required
            />
        </label>
    );
};

export default NumberInput;