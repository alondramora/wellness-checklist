import "./styles.css";

export default function App() {
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="inputItem">New Item</label>
          <input type="text" id="inputItem" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1>Wellness Checklist</h1>
    </>
  );
}
