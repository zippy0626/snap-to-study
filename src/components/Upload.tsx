import { useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Upload.css"
function Upload() {

    /*still need to finish this func
    const handleSubmit = async (event) => {

    }
    */

    const [numFlash, setNumFlash] = useState({
        numFlash: 0
    })

    return(
        <>
        <div className="upload">

        <form id="upload-form">
          <legend>Upload files to get started</legend>
          <div className="file-area">
            <label htmlFor="file">
              <div>Select Files (.pdf, .jpg, .jpeg, .png)</div>
              <input type="file" id="file" accept=".pdf,.jpg,.jpeg,.png" multiple required /></label>
          </div>
          <label htmlFor= "qty" />
          <input id="qty" name="qty" type="number" min="1" max="50" step="1" required></input>
          <button type="submit">Snap!</button>
          </form>

          </div>
          </>

    )

}

export default Upload;