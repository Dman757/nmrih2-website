import {
  AppPage,
  AboutUsPage,
} from '../pages/'

const routes = [
  {
    path: '/',
    exact: true,
    component: AppPage
  },
  {
    path: '/about-us',
    exact: true,
    component: AboutUsPage
  },
]

export default routes
