import "./add-cell.css";
import { useActions } from "../hooks/useActions";

interface AddCellProps {
  nextCellId: string;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
  const { insertBeforeCell } = useActions();

  return (
    <div>
      <button onClick={() => insertBeforeCell(nextCellId, "code")}>Code</button>
      <button onClick={() => insertBeforeCell(nextCellId, "text")}>Text</button>
    </div>
  );
};

export default AddCell;
