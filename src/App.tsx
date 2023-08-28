import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"
import { Router , Route, Routes } from "@solidjs/router";


function App() {

  return (
    <Router>

      <div class="flex flex-col w-full">
        <NavBar/> 
        <Routes>
          <Route path="/" component={Home}/>

          <Route path="/skills" component={Skills}/>
          
          <Route path="/expience" component={Experience}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
