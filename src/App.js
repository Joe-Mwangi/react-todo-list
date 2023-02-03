import Header from "./componets/Header";
import Form from "./componets/Form";
import AppProvider from "./context/Contex";

function App() {
  return (
    <AppProvider>
        <Header />
        <div className="section-center">
            <Form />
        </div>
    </AppProvider>
  )
}
export default App