import Header from "../components/Header";
import Footer from "../components/Footer";
 
const CommunityPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div style={{ marginTop: "100px" }} className="inner-container">
          <div className="comunity-header">
            <img src="/img/community.png" className="community-image" alt="" />
            <div className="community-header-right">
              <h3 className="community-header-title">Join the Community</h3>
              <div className="form">
                <input type="text" placeholder="Enter your email address" />
                <button>Join!</button>
              </div>
            </div>
          </div>
 
          <div className="community-content">
            <h3>What is the community?</h3>
            <p>The Foodary Community help to contribute dishes and recipes that are curated by our team of chefs. We will modify the recipe and publish them to Foodary!</p>
          </div>
 
          <div className="community-content">
            <h3>How do I join?</h3>
            <p>Simply enter your email address and we will send you a link to join the community!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
 
export default CommunityPage;