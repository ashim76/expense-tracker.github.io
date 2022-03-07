import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div className="expense-date">March 28 2022</div>
      <div className="expense-item-description">
        <h2>Car Insurance</h2>
        <div className="expense-item-price">$240</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
