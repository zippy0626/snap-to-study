import "./Start.css"
import { useNavigate } from "react-router-dom"

function Start() {

    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/upload");
    }


  return (
    <>
      <div className="card">

        <div className="intro">

        <h2> Flashcards Made Easy!</h2>

        </div>

        <button className="start" onClick= {handleNavigate} >
          Get Started! /add transition to Upload/
        </button>

      </div>
    </>
  );
}

export default Start;
