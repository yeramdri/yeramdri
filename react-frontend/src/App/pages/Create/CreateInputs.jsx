import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import styles from "./CreateInputs.scss";

const cx = classnames.bind(styles);

function CreateInputs({ onChange }) {
  return (
    <section className={cx("CreateInputs")}>
      <div className={cx("CreateInputs-title")}>
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
      <div className={cx("CreateInputs-bibleSection")}>
        <input
          name="bibleSection"
          onChange={onChange}
          type="text"
          placeholder="말씀 구간을 입력해 주세요"
        />
      </div>
      <div className={cx("CreateInputs-scripture")}>
        <textarea
          name="scripture"
          onChange={onChange}
          placeholder="말씀을 입력해 주세요"
        />
      </div>
      <div className={cx("CreateInputs-description")}>
        <textarea
          name="description"
          onChange={onChange}
          placeholder="설명 또는 나눔을 입력해 주세요"
        />
      </div>
      <div className={cx("CreateInputs-tag")}>
        <input
          name="tag"
          onChange={onChange}
          type="text"
          placeholder="태그를 입력해 주세요(#을 사용해 주세요)"
        />
      </div>
      <div className={cx("CreateInputs-originalLink")}>
        <input
          name="originalLink"
          onChange={onChange}
          type="text"
          placeholder="원문 말씀 링크를 입력해 주세요"
        />
      </div>
    </section>
  );
}

CreateInputs.propTypes = {
  onChange: PropTypes.func
};

export default CreateInputs;
