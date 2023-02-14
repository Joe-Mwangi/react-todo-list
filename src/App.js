import Header from "./componets/Header";
import Form from "./componets/Form";
import AppProvider from "./context/Contex";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./componets/About";

function App() {
  return (
    <AppProvider>
      <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={
            <>
              <div className="section-center">
                  <Form />
              </div>
            </>
          }></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </AppProvider>
  )
}
export default App