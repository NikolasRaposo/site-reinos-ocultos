import React from "react";
import Nav from "react-bootstrap/Nav";
import { Links } from "./styles";

export default function NavLink({ href, text }) {
  return (
    <Links border={0} marginRight={0.5}>
        <Nav.Link className={text} href={href}>{text}</Nav.Link>
    </Links>
  );
}
