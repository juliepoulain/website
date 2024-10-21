import olivia from "../images/olivia.svg";
import julie from "../images/julie.svg";

const Home = () => {
  return (
    <main id="home">
      <div className="header">JULIE POULAIN</div>
      <div className="subheader">BSA, Solutions Engineer, Full-Stack Developer & Cat Mom</div>
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
        Please enjoy and purruse at your leisure!
      </div>
    </main>
  );
};

export default Home;
