import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";

const Option = Select.Option;

class DocumentBoard extends React.Component {
  render() {
    const { docList } = this.props;
    return (
      <div>
        <Select
          // defaultValue="lucy"
          style={{ width: 300 }}
          // onChange={handleChange}
        >
          {docList &&
            docList.map((item, key) => (
              <Option key={key} value={item.documentId}>
                {item.documentId} - {item.documentName}
              </Option>
            ))}
        </Select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { docList } = state.document;
  return { docList };
};

export default connect(mapStateToProps)(DocumentBoard);
