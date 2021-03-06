import React from 'react';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Router, Route, IndexRoute,browserHistory,Redirect} from 'react-router'
import {Provider} from 'react-redux'
import store from './redux/Store/Store'
import App from './component/App'
import Index from './component/Index'
import LearnCenter from './component/LearnCenter'
import GoodArticle from './component/GoodArticle'
import CourseDetail from './component/CourseDetail'
import TestOnline from './component/TestOnline'
import PersonalCenter from './component/PersonalCenter'
import Rank from './component/Rank'
import StudentRank from './component/rank/StudentRank'
import TeacherRank from './component/rank/TeacherRank'
import StudentDetail from './component/rank/StudentDetail'
import TeacherDetail from './component/rank/TeacherDetail'
import NewsCenter from './component/NewsCenter'
import Login from './component/Login'
import CourseManage from './component/CourseManage'
import NotFoundPage from './component/NotFoundPage'
import ArticleDetail from './component/ArticleDetail'
import adminRoutes from './admin'
import  './style/css/font-awesome.min.css';
render(
	<Provider store={store}>
       <Router history={browserHistory}>
         <Route path='Login' component={Login} />
         <Route path='/' component={App}>
             <IndexRoute component={Index}/>
             <Route path='LearnCenter' component={LearnCenter}/>
             <Route path='GoodArticle' component={GoodArticle}/>
             <Route path='CourseDetail/:id' component={CourseDetail}/>
             <Route path='TestOnline' component={TestOnline}/>
             <Route path='PersonalCenter' component={PersonalCenter}/>
             <Route path='Rank' component={Rank}/>
             <Route path='StudentRank' component={StudentRank}/>
             <Route path='TeacherRank' component={TeacherRank}/>
             <Route path='NewsCenter' component={NewsCenter}/>
             <Route path='StudentDetail/:id' component={StudentDetail}/>
             <Route path='TeacherDetail/:id' component={TeacherDetail}/>
             <Route path='CourseManage' component={CourseManage}/>
             <Route path='AddCourse' component={CourseManage}/>
             <Route path='ArticleDetail/:id' component={ArticleDetail}/>
         </Route>


         {adminRoutes}


         <Route path='/404' component={NotFoundPage} />
         <Redirect from='*' to='/404' />
       </Router>
    </Provider>,
	document.getElementById('root')
);
registerServiceWorker();//在生产环境做本地缓存的东西

