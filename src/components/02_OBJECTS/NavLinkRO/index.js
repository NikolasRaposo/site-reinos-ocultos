import React from "react";
import Nav from "react-bootstrap/Nav";
import { Links } from "./styles";

export default function NavLink({ href, text }) {
  return (
    <Links>
      <Nav.Link href={href}>{text}</Nav.Link>
    </Links>
  );
}
