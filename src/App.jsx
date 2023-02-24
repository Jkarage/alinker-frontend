import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      scaleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div className="bg-white">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <NavigationBar />
          <Routes>
            <Route path="/docs" element={<Documentation />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

          <Footer />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
