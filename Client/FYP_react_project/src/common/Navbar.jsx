import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  searchParams.get('search')

  function searchStudent(e) {
    e.preventDefault();
    console.log(searchParams.get('search'));
  } 

  return (
    <>
      <div className="header">
        <div className="menu-icon">
          <span className="material-icons-outlined">menu</span>
        </div>
        {/* <form onSubmit={searchStudent} className="header-left"> */}
          <input
            ty
            className="search-bar"
            name="search"
            id="search"
            placeholder="Search"
          />
          <button type="submit" style={{ border: "none", background: "none" }}>
            <span className="material-icons-outlined">search</span>
          </button>
        {/* </form> */}
        <div className="header-right">
          <span>John Doe High School</span>
          <span className="material-icons-outlined">account_circle</span>
          
        </div>
      </div>
    </>
  );
}
