import React, { useState, useRef, useContext } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryItem = ({ author, content, created_date, emotion, id }) => {
  const { onRemove, onEdit } = useContext(DiaryDispatchContext);
  const [isEdit, setIsEdit] = useState(false);
  const [localContent, setLocalContent] = useState(content);
  const localContentRef = useRef();

  const toggleIsEdit = () => {
    setIsEdit((value) => !value);
  };

  const handleRemove = () => {
    if (window.confirm(`${id + 1}番目の日記を削除しますか？`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      alert("本文は5文字以上ご入力ください。");
      localContentRef.current.focus();
      return;
    }
    if (window.confirm(`${id + 1}番目の日記を修正しますか？`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          作成者：{author} | 感情点数：{emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentRef}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>修正取消</button>
          <button onClick={handleEdit}>修正完了</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>削除</button>
          <button onClick={toggleIsEdit}>修正</button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
