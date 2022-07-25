/************************* Imports ******************************* */
import React from "react";
import { NavLink } from "react-router-dom";


/*****************************Coding************************************/
const Error = () => {
  return (
    <section class="page_404">
      <div class="content_box_404">
        <h2>404</h2>
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not available!</p>
        <NavLink to="/" class="link_404">
             Redirect to HOME 
        </NavLink>
      </div>
      <div class="four_zero_four_bg">
      </div>
    </section>
  );
};

export default Error;
