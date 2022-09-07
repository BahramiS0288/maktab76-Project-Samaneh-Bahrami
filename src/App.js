import ThemeProvider from "react-bootstrap/ThemeProvider";
import { AppRoutes } from "./routes/index";
// import './App.css';
import { AuthProvider } from "./pages/login/components/AuthProvider";
import { Provider } from "react-redux";
import store from "./redux/store/store";
function App() {
  return (
<>

     <Provider store={store}>
      <ThemeProvider dir="rtl">
        <AuthProvider>
          
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
     </Provider>
    </>
  );
}

export default App;
