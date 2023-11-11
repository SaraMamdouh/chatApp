import { Layout } from "antd";

const { Content } = Layout;

const Body = () => {
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        Bill is a cat.
      </div>
    </Content>
  );
};

export default Body;
