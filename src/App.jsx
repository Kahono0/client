import "./App.css";
import { baseUrl } from "./utils/constants";

function App() {
  const handleSubmit = (e) => {
    let from = e.target.from.value;
    let to = e.target.to.value;
    let amount = e.target.amount.value;

    const data = {
      from,
      to,
      amount,
    };

    fetch(`${baseUrl}/tx`, {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Your transaction is underway, await confirmation");
        } else {
          alert("Something went wrong, perhaps check your details");
        }
      });
  };
  return (
    <div className="App">
      <div className="description">
        Welcome to send free.<br/>Please enter:
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>The number that is sending the money.</label><br/>
          <input type={"text"} name={"from"} required />
        </div>
        <div>
          <label>The number receiving the money</label><br/>
          <input type={"text"} name={"to"} required />
        </div>
        <div>
          <label>How much are you sending</label><br/>
          <input type={"number"} name={"amount"} required />
        </div>
        <div>
          <input type={"submit"} value={"send"} />
        </div>
      </form>
    </div>
  );
}

export default App;
