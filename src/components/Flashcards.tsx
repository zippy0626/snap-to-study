import { useState } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Flashcards.css";

function FlipButton() {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className="flash"
      onClick={() => setFlipped(f => !f)}
      aria-pressed={flipped}
    >
      <span className={`flipwrap${flipped ? " is-flipped" : ""}`}>
        <span className="face front"><h1>Flashcard!</h1></span>
        <span className="face back"><h1>Back!</h1></span>
      </span>
    </button>
  );
}

function Flashcards() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "106px",
  };

  return (
    <div className="flashcards">
      <Slider {...settings}>
        {data.map((d) => (
          <FlipButton key={d.name} />
        ))}
      </Slider>
    </div>
  );
}

const data = [
  { name: "John Morgan", review: "Lorem ipsum dolor sit amet..." },
  { name: "Ellie Anderson", review: "Lorem ipsum dolor sit amet..." },
  { name: "Nia Adebayo", review: "Lorem ipsum dolor sit amet..." },
  { name: "Rigo Louie", review: "Lorem ipsum dolor sit amet..." },
  { name: "Mia Williams", review: "Lorem ipsum dolor sit amet..." },
];

export default Flashcards;
