import authService from './../AuthService'

const WithAuthService = Component => props => <Component  auth={authService} {...props}/>

export default WithAuthService