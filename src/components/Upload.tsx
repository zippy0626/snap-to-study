import { useNavigate } from "react-router-dom"
import { useState } from "react";
import "./Upload.css"

function Upload() {

    /*still need to finish this func
    const handleSubmit = async (event) => {

    }
    */

    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate("/flashcards");
    }

    const [img, setImg] = useState<File | null>(null);   // first selected image
    const [qty, setQty] = useState<number | null>(null); // quantity
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const fd = new FormData(e.currentTarget);
  
      // If the file input allows multiple, get the first one for "img"
      const files = fd.getAll("file") as File[];
      const imgVar: File | null = files[0] ?? null;
  
      const qtyStr = fd.get("qty") as string | null;
      const qtyVar: number | null = qtyStr ? Number(qtyStr) : null;
  
      // store in state (and you still have the local variables imgVar/qtyVar)
      setImg(imgVar);
      setQty(qtyVar);
  
      console.log("img:", imgVar, "qty:", qtyVar);
    };

    return(
        <>
        <div className="upload">

        <form id="upload-form" onSubmit = {handleSubmit}>
          <legend>Upload files to get started</legend>
          <div className="file-area">
            <label htmlFor="file">
              <div>Select Files (.jpg, .jpeg, .png)</div>
              <input name= "file" type="file" id="file" accept=".jpg, .jpeg, .png" multiple required /></label>
          </div>
          <label htmlFor= "qty" />
          <input id="qty" name="qty" type="number" min="1" max="50" step="1" required></input>
          <button type="submit" onClick= {handleNavigate}>Snap!</button>
          </form>

          </div>
          </>

    )

}

export default Upload;