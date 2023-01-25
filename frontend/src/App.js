import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddResume from './dashboard/AddResume';
import Navbar from './components/navbar';
// import 'antd/dist/antd.css';
import { Layout } from 'antd';
import UpdateResume from './dashboard/UpdateResume';
import UploadResume from './dashboard/UploadResume';
import Bookmarked from './dashboard/BookMarked';
import Pdf from './dashboard/Pdf';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import Something from './components/something';
const { Sider, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Sider>
          <Navbar />
        </Sider>

        <Content>
          <BrowserRouter>
            <Routes>
              <Route path="/update/" element={<Something />} />

              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/" element={<Pdf />} /> */}
              <Route path="/addResume" element={<AddResume />} />
              <Route path="/updateResume" element={<UpdateResume />} />
              <Route path="/uploadResume" element={<UploadResume />} />
              <Route path="/bookmarked" element={<Bookmarked />} />
            </Routes>
          </BrowserRouter>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
