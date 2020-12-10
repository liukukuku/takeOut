import Loadable from '@@/Loadable'
const My = Loadable(() => import('@/pages/my'))
const Order = Loadable(() => import('@/pages/order'))
const Search = Loadable(() => import('@/pages/search'))
const Takeout = Loadable(() => import('@/pages/takeOut'))
const HomePage = Loadable(() => import('@/pages/homePage'))
const Login = Loadable(() => import('@/pages/login'))
const Myuser = Loadable(() => import('@/pages/myuser'))
const Modifyuser = Loadable(() => import('@/pages/modifyuser'))
const Editaddress = Loadable(() => import('@/pages/editaddress'))
const Changepassword = Loadable(() => import('@/pages/changepassword'))

export {
  My,
  Order,
  Search,
  Takeout,
  HomePage,
  Login,
  Myuser,
  Modifyuser,
  Editaddress,
  Changepassword
}
