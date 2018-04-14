import React, { Component } from "react";
import { Layout } from "antd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout" style={{ height: "100vh" }}>
          {this.props.children}
        </Layout>
      </div>
    );
  }
}

export default App;
