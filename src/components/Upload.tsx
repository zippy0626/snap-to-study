

function Upload() {

    /*still need to finish this func
    const handleSubmit = async (event) => {

    }
    */

    return(
        <>
        <h1>Snap2Study</h1>
        <form id="upload-form">
          <legend>Upload files to get started</legend>
          <div className="file-area">
            <label htmlFor="file">
              <div>Select Files (.pdf, .jpg, .jpeg, .png)</div>
              <input type="file" id="file" accept=".pdf,.jpg,.jpeg,.png" multiple required /></label>
          </div>
          <button type="submit">Generate Flashcards</button>
          </form>

          </>

    )

}

export default Upload;