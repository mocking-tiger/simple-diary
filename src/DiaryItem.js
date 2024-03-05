const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          作成者：{author} | 感情点数：{emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={(e) => {
          if (window.confirm(`${id}番目の日記を削除しますか？`)) {
            onDelete(id);
          }
        }}
      >
        削除
      </button>
    </div>
  );
};

export default DiaryItem;
