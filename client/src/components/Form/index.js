import React from "react";

function Input({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>BOOK</strong>
        </label>
        <input className="form-control" id="Title" type="text" value={q} placeholder="The Hobbit" name="q" onChange={handleInputChange} required />
      </div>
      <div className="pull-right">
        <button onClick={handleFormSubmit} type="submit" className="btn btn-lg btn-primary float-right"> Search </button>
      </div>

    </form>
    // export function TextArea(props) {
    //   return (
    //     <div className="form-group">
    //       <textarea className="form-control" rows="20" {...props} />
    //     </div>
    //   );
    // }

    // export function FormBtn(props) {
    //   return (
    //     <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    //       {props.children}
    //     </button>
    //   );
    // }

  );
}
export default Input;