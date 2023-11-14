import {useState} from "react";
function App() {
  const [greeting, setGreeting] = useState ({greeting:"Hello", counter: 0});
  const changeGreeting = () => {
setGreeting ({ greeting: "good bye", counter: 1})
  }
  console.log(greeting);
return (
<div>
  <button onClick={changeGreeting}>Click me</button>
  {greeting.greeting}
</div>

);

}

export default App;

