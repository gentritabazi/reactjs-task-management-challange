import "../../assets/css/main.css";
import Home from "../../pages/Home/Home";
import AppLayout from "../../layouts/AppLayout/AppLayout";

const App: React.FC = () => {
  return (
    <div id="App">
      <AppLayout>
        <Home />
      </AppLayout>
    </div>
  );
};

export default App;
