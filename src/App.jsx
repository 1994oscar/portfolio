
import {ThemeProvider}  from "./providers/ThemeProvider"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import { Projects } from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <ThemeProvider>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </ThemeProvider> 
  )
}

export default App
