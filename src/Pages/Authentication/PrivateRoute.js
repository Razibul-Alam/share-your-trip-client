
import { Spinner } from 'react-bootstrap';
import { Navigate} from 'react-router';
import useAuth from '../../Hooks/useAuth';



const PrivateRoute = ({children}) => {
    const{user,isLoading}=useAuth()
    if (isLoading) {
      return <Spinner animation="border" variant="danger" />
    }
    console.log(user.email)
    
        
       
       return user.email? children : <Navigate to="/login" />;
    
};

export default PrivateRoute;