import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h2>Hello World, Alinker Initial commits</h2>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
