import { useState } from "react"
import CategoryButton from "./CategoryButton"

const ProjectsCategories = ({categories, onFilterProjects}) => {
    const [activaCategory, setActiveCategory] = useState("all")

    const changeCategoryHandler = (category) => {
        setActiveCategory(category)
        onFilterProjects(category)
    }

  return (
    <div className="portfolio__categories">
        {
            categories.map(category => (
                <CategoryButton key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)} className={`btn cat__btn ${activaCategory === category ? "primary" : "white"}`} />
            ))
        }
    </div>
  )
}

export default ProjectsCategories