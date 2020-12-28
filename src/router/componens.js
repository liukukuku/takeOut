import Loadable from '@@/Loadable'
const My = Loadable(() => import('@/pages/my'))
const Order = Loadable(() => import('@/pages/order'))
const Search = Loadable(() => import('@/pages/search'))
const Takeout = Loadable(() => import('@/pages/takeOut'))
const HomePage = Loadable(() => import('@/pages/homePage'))
const Login = Loadable(() => import('@/pages/login'))
const Restaurants = Loadable(() => import('@/pages/restaurants'))
const SearchCity = Loadable(() => import('@/pages/searchCity'))
const Myuser = Loadable(() => import('@/pages/myuser'))
const FootList = Loadable(() => import('@/pages/footList'))


export {
  My,
  Order,
  Search,
  Takeout,
  HomePage,
  Login,
  Restaurants,
  SearchCity,
  Myuser,
  FootList
}
