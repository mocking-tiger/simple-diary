import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, onEdit, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>日記リスト</h2>
      <h4>{diaryList.length}個の日記があります。</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
