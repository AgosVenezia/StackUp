import Header from "../components/Header";
import { my_blogs } from "../blogs";
import { useLocation } from "react-router-dom";

const BlogPage = () => {
  let {state} = useLocation()
  let blog_id = state.blog_id;

  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner-container">
          <h1 className="page-title">{my_blogs[blog_id].title}</h1>
          <div className="blog-subcontents">
            <p className="blog-author">{my_blogs[blog_id].author}</p>
            <p className="blog-date">{my_blogs[blog_id].date}</p>
          </div>
          <img src="./img/header.jpg" className="hero-image" alt="" />
          <div className="blog-content">
            <p className="blog-text">{my_blogs[blog_id].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;