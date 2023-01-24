import Header from "../components/Header";

const AuthorPage = () => {
    return (
        <div>
          <Header />
          <div className="container">
            <div className="inner-container">
              <h1 className="page-title">About the author: Aguito</h1>
              <div className="blog-subcontents">
                <p className="blog-author">Aguito</p>
                <p className="blog-date">2023-01-24</p>
              </div>
              <img src="./img/author.jpg" className="hero-image" alt="" />
              <div className="blog-content">
                <p className="blog-text">My interest in web development has grown significantly in recent years. I find the process of creating and designing websites to be both challenging and rewarding. I enjoy experimenting with different languages such as HTML, CSS, and JavaScript to build visually appealing and responsive web pages. Additionally, I am fascinated by the endless possibilities of web development and how it allows me to bring ideas to life through code. I am constantly seeking new opportunities to learn and grow as a web developer, and I am excited to continue exploring this field.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
 
export default AuthorPage;