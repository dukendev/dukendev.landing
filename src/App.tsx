import Experience from "./components/Experience"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Skills from "./components/Skills"


function App() {

  return (

      <div class="flex flex-col w-full">
        <NavBar/> 
        <section class="sec-hide h-screen">
          <Home/>
        </section>
        <section class="sec-hide h-screen">
          <Skills/>
        </section> 
        <section class="sec-hide h-screen">
          <Experience/>
        </section> 
      </div>
  )
}

export default App
