import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from './Home'
import CreatePost from './CreatePost'
import PostDetail from './PostDetail'
import Navbar from './Navbar' 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;