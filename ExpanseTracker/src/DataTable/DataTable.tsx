import { FieldValues } from "react-hook-form";

interface DataTableProps {
  data: FieldValues[];
  removeItem: (value: string) => void;
}

const DataTable = ({ data, removeItem }: DataTableProps) => {
  return (
    <table className="table">
      <thead>
        {data.length > 0 && (
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        )}
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.description}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                onClick={() => removeItem(item.description)}
                className="btn btn-light"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
