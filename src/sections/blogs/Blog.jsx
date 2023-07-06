import Card from "../../components/card/Card"

const Blog = ({blog}) => {
  return (
    <Card>
      <a href={blog.link} color="black">  
        <p>{blog.quote}</p>
        <div className="blog">
            <div className="blog-avatar">
                <img src={blog.avatar} alt="Blog Avatar" />
            </div>
            <div className="blog-details">
                <h6>{blog.name}</h6>
                <small>{blog.date}</small>
            </div>
        </div>
      </a>
    </Card>
  )
}

export default Blog