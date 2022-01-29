import './App.css';
import PostBlog from './Pages/PostBlog/PostBlog';
import HomeMain from './Pages/PostBlog/Home-Page/HomeMain/HomeMain';
import NavigationBar from './Pages/PostBlog/Home-Page/Navigation/NavigationBar';
import Footer from './Pages/PostBlog/Home-Page/Footer-page/Footer';

import {BrowserRouter as Router, Route, Routes,} from "react-router-dom"
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './Pages/Authentication/LoginPage';
import BlogDetails from './Pages/PostBlog/Home-Page/AllBlogs/BlogDetails';
import Dashboard from './Pages/Admin-Dashboard/Dashboard';
import CreateAdmin from './Pages/Admin-Dashboard/CreateAdmin';
import ManageAllBlogs from './Pages/Admin-Dashboard/ManageAllBlogs';
import MyBlogs from './Pages/Users/MyBlogs';
import PrivateRoute from './Pages/Authentication/PrivateRoute';
import EmailLogin from './Pages/Authentication/EmailLogin';
import RegisterPage from './Pages/Authentication/RegisterPage';
import BlogUpdate from './Pages/Admin-Dashboard/BlogUpdate';

function App() {
  return (
    <AuthProvider>
    <Router>
      <NavigationBar/>
            <Routes>
      <Route path="/" element={<HomeMain/>}/>
        <Route path="home" element={<HomeMain/>}/>
        <Route path="post-blog" element={<PrivateRoute><PostBlog/></PrivateRoute>}/>
        <Route path="/single-blog/:blogId" element={<PrivateRoute><BlogDetails/></PrivateRoute>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="email-login" element={<EmailLogin/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="myblogs" element={<MyBlogs/>}/>

        <Route path="/dashboard/*" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
        <Route path="create" element={<CreateAdmin/>} />
        <Route path="admin" element={<ManageAllBlogs/>} />
       <Route path="admin/update" element={<BlogUpdate/>} />
      </Route>
          </Routes>
      <Footer/>
      </Router>
      </AuthProvider>
  );
}

export default App;
