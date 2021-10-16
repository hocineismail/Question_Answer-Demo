import { lazy } from 'react';

 
const routes = [
  {
    path: 'add-question',
    component: lazy(() => import('../pages/questions/AddQuestion')),
    exact: true
  },
  {
    path: 'my-questions',
    component: lazy(() => import('../pages/questions/MyQuestions')),
    exact: true
  },
  {
    path: 'my-answers',
    component: lazy(() => import('../pages/questions/MyAnswers')),
    exact: true
  },
  {
    path: 'followers',
    component: lazy(() => import('../pages/Follow/Followers')),
    exact: true
  },
  {
    path: 'following',
    component: lazy(() => import('../pages/Follow/Following')),
    exact: true
  },

  {
    path: 'interesting-questions',
    component: lazy(() => import('../pages/questions/InterestingQuestion')),
    exact: true
  },

  {
    path: 'notifications',
    component: lazy(() => import('../pages/Notifications/Notifications')),
    exact: true
  },

  {
    path: 'settings',
    component: lazy(() => import('../pages/settings/Settings')),
    exact: true
  }
];

export default routes;