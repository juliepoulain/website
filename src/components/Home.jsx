import olivia from "../images/olivia.svg";
import julie from "../images/julie.svg";

const Home = () => {
  return (
    <main id="home">
      <div className="header">JULIE POULAIN</div>
      <div className="general-text">
        <span>Welcome to my website.</span>
        <br />
        <span>
          My co-worker Olivia and I built it all by ourselves from scratch!
        </span>
      </div>
      <div className="image-content">
        <div className="text-image-container">
          <div className="image-title">This is me:</div>
          <div className="circle-container">
            <img className="responsive-image" src={julie} />
          </div>
        </div>
        <div className="text-image-container">
          <div className="image-title">This is Olivia:</div>
          <div className="circle-container">
            <img className="responsive-image" src={olivia} />
          </div>
        </div>
      </div>
      <div className="general-text">
        Please enjoy and purruse whatever you'd like!
      </div>
    </main>
  );
};

export default Home;
