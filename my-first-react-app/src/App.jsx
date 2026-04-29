import Demo from "./Demo";
import Rule1 from "./JSX/Rule1";
import User from "./User";
import Rule2 from "./JSX/Rule2";
import Rule3 from "./JSX/Rule3";
import Rule4 from "./JSX/Rule4";
import Rule5 from "./JSX/Rule5";
import Rule67 from "./JSX/Rule67";
import User1 from "./Components/User1";
import User2 from "./Components/User2";
import User3 from "./Components/User3";

let App =()=>{
    return <div>
        <h1>App Component</h1>
       {/* <Demo/> */}
       {/* <User/> */}
       {/* <Rule1/> */}
       {/* <Rule2/> */}
       {/* <Rule3/> */}
       {/* <Rule4/> */}
       {/* <Rule5/> */}
       {/* <Rule67/> */}
       <User1/>
       <User2/>
       <User3/>

    </div>;
}

export default App;