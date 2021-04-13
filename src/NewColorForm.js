import {useState} from "react"
import {useHistory} from "react-router-dom"

function NewColorForm({ addColor }) {
  const [formData, setFormData] = useState({ name: "", value: "" });
  const history = useHistory();

  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addColor(formData)
    history.push("/colors")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="color" name="value" value={formData.value} onChange={handleChange}></input>
      <input type="text" name="name" value={formData.name} placeholder="Please enter color" onChange={handleChange}></input>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default NewColorForm;
