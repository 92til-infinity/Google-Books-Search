import React from "react";

function InputForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>BOOK</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="the Hobbit"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button onClick={handleFormSubmit} type="submit" className="btn btn-lg btn-primary float-right"> Search </button>
      </div>

    </form>

  );
}
export default InputForm;