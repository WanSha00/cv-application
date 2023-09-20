import "./styles/App.css";
import EditForm from "./components/EditForm";
import ResumeDisplay from "./components/ResumeDisplay.jsx";

function App() {
  return (
    <>
      <div className="resume-builder">
        <EditForm />
        <ResumeDisplay />
      </div>
    </>
  );
}

export default App;
