import { Layout } from "antd";
import ToggleButton from "../ToggleButton";

const { Header: HeadetAntd } = Layout;

const Header = () => {
  return (
    <HeadetAntd
      style={{
        display: "flex",
        justifyContent: "right",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <ToggleButton
        style={{ color: "white", marginLeft: "5px" }}
        label="dark mode"
      />
    </HeadetAntd>
  );
};

export default Header;
