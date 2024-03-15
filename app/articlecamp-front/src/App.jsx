import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleLayout from './layouts/ArticleLayout';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes> 
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path="/articles" element={<ArticleLayout />}>
          <Route index element={<ArticleListPage />} />
          <Route path='create' element={<CreatePage />} />
          <Route path=':id' element={<ArticlePage />} />
          <Route path=':id/edit' element={<EditPage />} />
        </Route>

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users" element={<UsersPage />} />
        
        {/* 全匹配路由
        設定 Route path="*" 在所有路由的最下方，當上面的路徑都沒有匹配到時，就會顯示此組件，可用於 404 找不到頁面 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
