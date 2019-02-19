import React, { Component } from "react";
import { connect } from "react-redux";
import FilesSidebar from "./FilesSidebar";
import ImageViewer from "./ImageViewer";

class SpritesSection extends Component {
  render() {
    const { spriteSheets } = this.props;
    return (
      <div>
        <FilesSidebar files={spriteSheets} />
        <ImageViewer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    spriteSheets:
      state.project.present && state.project.present.spriteSheets
        ? state.project.present.spriteSheets
        : []
  };
}

export default connect(mapStateToProps)(SpritesSection);
