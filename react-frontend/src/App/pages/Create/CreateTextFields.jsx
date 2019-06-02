import React, { createElement } from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./CreateTextFields.scss";

const cx = classnames.bind(styles);

const TEXT_FIELDS_DATA = [
  {
    name: "bibleSection",
    tag: "input",
    type: "text",
    placeholder: "말씀 구간을 입력해 주세요"
  },
  {
    name: "scripture",
    tag: "textarea",
    placeholder: "말씀을 입력해 주세요"
  },
  {
    name: "description",
    tag: "textarea",
    placeholder: "설명 또는 나눔을 입력해 주세요"
  },
  {
    name: "tag",
    tag: "input",
    type: "text",
    placeholder: "태그를 입력해 주세요(#을 사용해 주세요)"
  },
  {
    name: "originalLink",
    tag: "input",
    type: "text",
    placeholder: "원문 말씀 링크를 입력해 주세요"
  }
];

function CreateTextFields({ onChange }) {
  const _renderTextFields = textFieldsData =>
    textFieldsData.map((data, i) => {
      const { name, tag } = data;
      return (
        <div className={cx(`CreateTextFields-${name}`)} key={i}>
          {createElement(tag, { ...data, onChange })}
        </div>
      );
    });

  return (
    <section className={cx("CreateTextFields")}>
      <div className={cx("CreateTextFields-title")}>
        <select name="type" onChange={onChange}>
          <option value="bible">말씀</option>
          <option value="life">삶</option>
        </select>
        <input
          name="title"
          onChange={onChange}
          type="text"
          placeholder="제목을 입력해 주세요"
        />
      </div>
      {_renderTextFields(TEXT_FIELDS_DATA)}
    </section>
  );
}

CreateTextFields.propTypes = {
  onChange: PropTypes.func
};

export default CreateTextFields;
