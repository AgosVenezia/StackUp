import "../App.css";
 
const Button = ({ text, setDisplay, display, equation, setEquation }) => {
   const handleClick = () => {
    if (display === "0" && "+-x÷%+/-.".includes(text)) { // if the display is 0 and the button is an operator, don't add the operator
        return
      } else if (display === "0" && text !== "AC") {
        setDisplay(text);
        setEquation(text);
      } else if ("+-x÷%+/-.".includes(text) && "+-x÷%+/-.".includes(display[display.length - 1])) { // if the last character is an operator, don't add another operator
        return
      } else if (typeof (parseInt(display)) === "number" && typeof (text) === "number") { // if the last character is a number, don't add another number
        setDisplay(text)
        setEquation(text)
      } else if (text === "AC") {
        setDisplay("0");
        setEquation("");
      } else if (equation == "") {
        setEquation(text);
        setDisplay(text);
      } else if (text === "+/-") {
        setDisplay(display * -1);
        setEquation(equation * -1);
      } else if (text === "%") {
        setDisplay(display / 100);
        setEquation(equation / 100);
      } else if (text === "÷") {
        setDisplay(display + " ÷ ");
        setEquation(equation + " / ");
      } else if (text === "x") {
        setDisplay(display + " x ");
        setEquation(equation + " * ");
      } else if (text === "+") {
        setDisplay(display + " + ");
        setEquation(equation + " + ");
      } else if (text === "-") {
        setDisplay(display + " - ");
        setEquation(equation + " - ");
      } else if (text === "=") {
        setDisplay(eval(equation));
        setEquation(eval(equation));
      } else {
        setDisplay(display === "0" ? text : display + text);
        setEquation(equation + text);
      }
  }
 
  return (
    <button className="button"
      onClick={handleClick}
    >{text}</button>
  );
}
 
export default Button;