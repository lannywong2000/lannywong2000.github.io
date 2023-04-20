import "./portfolio.css"
import ProjectsCategories from "./ProjectsCategories"
import Projects from "./Projects"
import { useState } from "react"
import data from "./data"

const Portfolio = () => {
  const [projects, setProjects] = useState(data)

  const categories = ["all", ...new Set(data.map(item => item.category))]

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data)
      return
    }

    const filteredProjects = data.filter(project => project.category === category)
    setProjects(filteredProjects)
  }

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Check out some of the projects I recently worked on. Use the buttons to toggle different categories.</p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={categories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio