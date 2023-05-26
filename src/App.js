import { AddButton } from "./components/AddButton";
import "add-to-calendar-button/assets/css/atcb.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Typography } from "@mui/material";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h3" style={{ marginLeft: 16 }}>
            What is codespace??? Generate calendar create links
          </Typography>
        </header>
        <AddButton />
      </div>
    </LocalizationProvider>
  );
}

export default App;
