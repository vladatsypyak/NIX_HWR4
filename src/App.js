
import {Link, Route, Routes} from "react-router-dom"
import Layout from "./pages/Layout";
import Contacts from "./pages/Contact";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
     <nav>
         <Link className={"link"} to={"/home"}>Home</Link>
         <Link className={"link"}to={"/blogs"}>Blogs</Link>
         <Link className={"link"}to={"/contacts"}>Contacts</Link>

     </nav>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="*" element={<NoPage/>}/>


        </Routes>
    </div>
  );
}

export default App;
