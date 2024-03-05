import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      alert("作成者は1文字以上ご入力ください。");
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      alert("本文は5文字以上ご入力ください。");
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("貯蔵成功");
    setState({
      author: "",
      content: "",
      emotion: 5,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>今日の日記</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        今日の感情点数:{" "}
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={5}>5</option>
          <option value={4}>4</option>
          <option value={3}>3</option>
          <option value={2}>2</option>
          <option value={1}>1</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>日記貯蔵</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
