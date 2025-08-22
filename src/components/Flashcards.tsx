import Slider from "react-slick";
import type { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Flashcards.css"; // ⬅️ make sure file name/case matches disk

function Flashcards() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,     // center the active slide
    centerPadding: "100px", // no side padding (keeps perfect centering)
  };

  return (
    <div className="flashcards">
      <Slider {...settings}>
        {data.map((d) => (
          <button key={d.name} className="flash">
              <h1>Hello</h1>
          </button>
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
