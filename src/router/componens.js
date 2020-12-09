import Loadable from '@@/Loadable'
const My = Loadable(() => import('@/pages/my'))
const Order = Loadable(() => import('@/pages/order'))
const Search = Loadable(() => import('@/pages/search'))
const Takeout = Loadable(() => import('@/pages/takeOut'))
<<<<<<< HEAD
const HomePage = Loadable(() => import('@/pages/homePage'))
=======
const Login = Loadable(() => import('@/pages/login'))
>>>>>>> ce1848b84f7e05e4a748f144a7ffde18cb32e56f

export {
  My,
  Order,
  Search,
  Takeout,
<<<<<<< HEAD
  HomePage
=======
  Login
>>>>>>> ce1848b84f7e05e4a748f144a7ffde18cb32e56f
}
