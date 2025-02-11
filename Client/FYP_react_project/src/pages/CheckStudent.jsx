import React from "react";
import "../CSS/check.css";

export default function CheckStudent({ setActivePage }) {
  setActivePage("check-student");

  return (
    <>
      <div class="checking">
        <h1 class="checkin">Check Student</h1>
        <form class="checking-form" action="">
          <div class="form-group">
            <label for="Reg-no" class="label-check">
             Student Number
            </label>
            <input type="text" name="regno" id="regno" />
          </div>
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              First Names
            </label>
            <input type="text" name="regno" id="regno" />
          </div>
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              Middle Names
            </label>
            <input type="text" name="regno" id="regno" />
          </div>
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              Last Names
            </label>
            <input type="text" name="regno" id="regno" />
          </div>
          <div class="form-group">
            <label for="Reg-no" class="label-check">
              School Name
            </label>
            <input type="text" name="regno" id="regno" />
          </div>
          
        </form>
        <button class="button-for-submit">Submit</button>
      </div>
    </>
  );
}
