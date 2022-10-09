import "./ContactInput.css";

const ContactInput = (props) => {
  return (
    <div className="nsjs">
      <div>CONTECT US BY FILLING UP FORM</div>
      <label>{props.Name}</label>
      <input {...props.input1}></input>
      <label>{props.Email}</label>
      <input {...props.input2}></input>
      <label>{props.Phone}</label>
      <input {...props.input3}></input>
      <button type="submit">Submit</button>
    </div>
  );
};

export default ContactInput;
