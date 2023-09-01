import { useState } from "react";

function CreateCar({ createCar }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <h1>Add New Car</h1>
      {/* Form for creating a new car NFT */}
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await createCar(document.getElementById("cid").value);
          setIsLoading(false);
        }}
        className="box"
      >
        <input type="text" id="cid" placeholder="Content ID (CID)" required />
        <div style={{ width: "100%" }}>
          {/* Submit button to create a new car NFT */}
          <button type="submit" className="primary-btn" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateCar;
