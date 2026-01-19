import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import MainContent from "./Components/MainContent.jsx";
import User from "./Components/User.jsx";
function App() {
  // const friends = ["Alice", "Bob", "Charlie"];
  // const multiply = (a, b) => a * b;
  // const date = new Date();
  // const numbers =[1,4,5,6,7,8,9,4,66,2];
  return (
    <main>
      {/* <form>
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <input type="text" placeholder="Enter Name" />
      </form> */}
      {/* <h1>2 * 20 = {multiply(2,20)}</h1>
      <h2>My best friend is {friends[0]}</h2> */}
      {/* <h2>Current Date and Time: {date.toLocaleDateString()}</h2> */}
      {/* { numbers.map((numbers,index)=>(          
          <ul key={index}>
            <li>{numbers}</li>
          </ul>

        ))} */}
        <User />
    </main>
  );
  
}
export default App;