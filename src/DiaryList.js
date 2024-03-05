import DiaryItem from "./DiaryItem";

const DiaryList = ({ onDelete, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>日記リスト</h2>
      <h4>{diaryList.length}個の日記があります。</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
