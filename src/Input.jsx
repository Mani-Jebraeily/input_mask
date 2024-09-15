/* eslint-disable react/prop-types */
const Input = ({changeHandeler, hint,text,setText}) => {
console.log(text)
  return (
    <div className="input">
      {hint&& <label> {hint[0]}</label>}
      <input
      value={text}
        type="text"
        id="input"
        placeholder="Please Enter city"
        onChange={changeHandeler}
      />
    </div>
  );
};

export default Input;
