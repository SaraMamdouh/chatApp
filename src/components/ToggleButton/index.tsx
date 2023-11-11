import React from "react";
import { Switch } from "antd";

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const ToggleButton: React.FC<{ label: string; style: object }> = (props) => (
  <>
    <Switch defaultChecked onChange={onChange} />
    <label style={props.style}>{props.label}</label>
  </>
);

export default ToggleButton;
