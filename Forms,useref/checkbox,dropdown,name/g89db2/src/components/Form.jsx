import { useState } from "react";

const initialData = {
  name: "",
  email: "",
  country: "USA",
  status:true,
  gender:'male',
  marriage:false
};
export default function Form() {
  const [formData, setFormData] = useState(initialData);

  // const handleName=(e)=>{
  //   setFormData({...formData,name:e.target.value})
  // }

  // const handleEmail=(e)=>{
  //   setFormData({...formData,email:e.target.value})
  // }

  const handleChange = (e) => {
    const { value, name,type,checked } = e.target;

    const valueToUpdate = type ==="checkbox" ? checked : value;
    console.log(valueToUpdate)
    setFormData({
      ...formData,
      [name]: valueToUpdate,
    });
  };

  return (
    <div style={{ "font-family": "sans-serif", "text-align": "center" }}>
      <h1>Form</h1>
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name..."
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email..."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <select
          name="country"
          defaultValue={formData.country}
          onChange={handleChange}
          value={formData.country}
        >
          <option key="ind">India</option>
          <option key="usa">USA</option>
        </select>
        <div>
          <input  checked={formData.status } name="status"type="checkbox" onChange={handleChange}/>
          <label htmlFor="">male</label>
        </div>
        <div>
          <input  checked={formData.gender} name="gender"type="checkbox" onChange={handleChange}/>
          <label htmlFor="">Female</label>
        </div>
        <div>
          <input  checked={formData.marriage } name="marriage"type="checkbox" onChange={handleChange}/>
          <label htmlFor="">Maritial Status</label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <li>name:{formData.name}</li>
      <li>email:{formData.email}</li>
      <li>Coountry:{formData.country}</li>
    </div>
  );
}
