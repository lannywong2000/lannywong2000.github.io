import Card from "../../components/card/Card"

const Blog = ({blog}) => {
  return (
    <Card>
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
    </Card>
  )
}

export default Blog