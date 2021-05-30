import "./add-cell.css";
import { useActions } from "../hooks/useActions";

interface AddCellProps {
  previousCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId }) => {
  const { insertAfterCell } = useActions();

  return (
    <div className="add-cell">
      <div className="add-buttons">
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertAfterCell(previousCellId, "code")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span> Code</span>
        </button>
        <button
          className="button is-rounded is-primary is-small"
          onClick={() => insertAfterCell(previousCellId, "text")}
        >
          <span className="icon is-small">
            <i className="fas fa-plus"></i>
          </span>
          <span>Text</span>
        </button>
      </div>
      <div className="divider" />
    </div>
  );
};

export default AddCell;
