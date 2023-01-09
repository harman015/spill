import { useRoutes} from "react-router-dom";
import Login from "../component/layout/Login";
import Register from "../component/layout/Register";
import Main from "../component/ui/Main";
import Profile from "../component/user/Profile";
import User from "../component/user/userListing";
import Privacy from "../component/pages/Privacy";
import Terms from "../component/pages/terms&condition";
import Healthscreen from "../component/user/Healthscreen";
import Forgetpassword from "../component/layout/Forget-password";
import Driverdetail from "../component/Driver/Driverdetail";
import Legal from "../component/pages/Legal";
import Document from "../component/Driver/Document";
import Useradd from "../component/user/useradd";
import Driveradd from "../component/Driver/Driveradd";

function AppRoutes() {
    const routes = useRoutes(
      [
         {path:'/',element:<Login/>},
         {path:'/register',element:<Register/>},
         {path:'/main',element:<Main/>},
         {path:'/user',element:<User/>},
         {path:'/useradd',element:<Useradd/>},
         {path:'/Driveradd',element:<Driveradd/>},
         {path:'/profile',element:<Profile/>},
         {path:'/privacy',element:<Privacy/>},
         {path:'/terms&condition',element:<Terms/>},
         {path:'/healthscreen',element:<Healthscreen/>},
         {path:'/forgetpassword',element:<Forgetpassword/>},
         {path:'/driverdetail',element:<Driverdetail/>},
         {path:'/legal',element:<Legal/>},
         {path:'/document',element:<Document/>}
      ]
    )
    return routes;
  }

  export default AppRoutes;