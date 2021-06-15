import "antd/dist/antd.css";
import "./Login.css";
import { Form, Input, Button, Checkbox } from "antd";

function Login() {
  const onFinish = (values) => {
    const { username } = values;
    localStorage.setItem("username", username);

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form">
        
      <div className="login-form">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              <a href="/welcome">Submit</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
