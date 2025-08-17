export default function UserInput({ inputHeadings, onChange, userInput }) {

  function renderInputGroup(label, value) {
    return (
      <>
        <label htmlFor={label}>{label}</label>
        <input
          type="number"
          id={label}
          value={userInput[value]}
          onChange={(event) => onChange(value, event.target.value)}
          required
        />
      </>
    );
  }

  return (
    <section id="user-input">
      <div className="input-group">
        {Object.entries(inputHeadings).map(([key, value]) => (
          <p key={key}>{renderInputGroup(key, value)}</p>
        ))}
      </div>
    </section>
  );
}
