import React from "react";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function Sidebar({activePage}) {

  const navigate = useNavigate()

  function logoutFunc(){
    navigate('/login')
  }

  return (
    <>
      <div className="aside">
        <div class="sidebar-title">
          <div class="sidebar-brand">
          <span class="material-icons-outlined">school</span>
            StudentTrack
          </div>
        </div>
        <ul class="sidebar-list">
          <li class={(activePage === "dashboard")?"sidebar-list-item active":"sidebar-list-item"}>
            <Link to="dashboard"><span class="material-icons-outlined">dashboard</span>Dashboard</Link>
          </li>
          <li class={(activePage === "check-student")?"sidebar-list-item active":"sidebar-list-item"}>
            <Link to="check-student"><span class="material-icons-outlined">tv</span>Check Student</Link>
          </li>
          <li class={(activePage === "add-student")?"sidebar-list-item active":"sidebar-list-item"}>
            <Link to="add-student"><span class="material-icons-outlined">group_add</span>Add Student</Link>
          </li>
          <li class={(activePage === "update-student")?"sidebar-list-item active":"sidebar-list-item"}>
            <Link to="update-student"><span class="material-icons-outlined">update</span>Update Student</Link>
          </li>
          <li class={(activePage === "overview")?"sidebar-list-item active":"sidebar-list-item"}>
            <Link to="overview"><span class="material-icons-outlined">article</span>Overview</Link>
          </li>

          {/* logout */}
          <li class="sidebar-list-item" onClick={logoutFunc}>
            <span class="material-icons-outlined">logout</span>Logout
          </li>
        </ul>
      </div>
    </>
  );
}
