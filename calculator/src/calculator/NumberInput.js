// const name = props.name;
// const label = props.label;
// const value = props.value;
let NumberInput = (props) => {
    const { name, label, value } = props;
    
    // htmlFor = JSX jej přeloží jako HTML atribut for
    return (
      <label htmlFor={name}>
        {label}
        <input
          onChange={props.onChange}
          id={name}
          value={value}
          type="number"
          name={name}
          required
        />
      </label>
    );
  };
  
  export default NumberInput;