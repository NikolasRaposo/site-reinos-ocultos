import React from "react";
import Nav from "react-bootstrap/Nav";
import Style from "./style.module.css";

export default function NavLink({ href, text }) {
  return (
    <div className={Style.link}>
      <Nav.Link href={href}>{text}</Nav.Link>
    </div>
  );
}
