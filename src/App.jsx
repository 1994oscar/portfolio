
import {ThemeProvider}  from "./providers/ThemeProvider"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import { Projects } from "./components/Projects"

function App() {

  return (
    <ThemeProvider>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
      <Projects></Projects>
    </ThemeProvider> 
  )
}

export default App
