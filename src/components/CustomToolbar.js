import React from "react";

const CustomHeart = () => <span>♥</span>;

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font tool-item">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size tool-item">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align tool-item" />
    <select className="ql-color tool-item" />
    <select className="ql-background tool-item" />
    <button className="ql-clean tool-item" />
    <button className="ql-insertHeart tool-item">
      <CustomHeart />
    </button>
    <select className="ql-size tool-item"/>
  </div>
);

export default CustomToolbar;