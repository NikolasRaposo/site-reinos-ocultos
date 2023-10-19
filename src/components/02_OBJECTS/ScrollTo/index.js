import { Link } from "react-scroll";
import { LinkFormat } from "./styles";

export default function NavLink({ href, text }) {
  return (
    <LinkFormat border={0} marginRight={0.5}>
    <Link to={href} spy={true} smooth={true} offset={50} duration={500}>
      {text}
    </Link>
    </LinkFormat>
  );
}
