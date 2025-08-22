import { useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Flashcards.css";

import type { FlashCard } from "../modules/flashCard.ts";


function FlipButton({ front, back }: { front: string; back: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      type="button"
      className="flash"
      onClick={() => setFlipped(f => !f)}
      aria-pressed={flipped}
    >
      <span className={`flipwrap${flipped ? " is-flipped" : ""}`}>
        <span className="face front"><h1>{front}</h1></span>
        <span className="face back"><h1>{back}</h1></span>
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

  const location = useLocation();
  const flashCards = (location.state?.flashCards ?? []) as FlashCard[];

  // Map to the minimal shape this component needs
  const data = flashCards.map(fc => ({ front: fc.front, back: fc.back }));

  return (
    <div className="flashcards">
      <Slider {...settings}>
        {data.map((d, i) => (
          <FlipButton key={i} front= {d.front} back = {d.back} />
        ))}
      </Slider>
    </div>
  );
}

export default Flashcards;
