import React from "react";
import { useForm } from "./useForm";
import "./styles.css";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // First Render
  // useState('Asaad');
  // Initialize the name state variable with 'Asaad'

  // Second Render
  // useState("Asaad");
  // Read the name state variable (argument is ignored)

  const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  return (
    <div>
      <input
        name="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};
export default App;
