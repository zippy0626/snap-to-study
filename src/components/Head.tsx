import reactLogo from '../assets/react.svg'
import '../App.css'


//RxLogo Component used as the header
function Head() {

  return (
    <>
      <div className="logo-container">

        <a href="/" target="_blank"  >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

    </>
  )
}

export default Head