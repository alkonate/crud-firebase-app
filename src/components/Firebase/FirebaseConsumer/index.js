import FirebaseContext from "../FirebaseContext";

const withFirebase = (Component) => (props) =>  
            <FirebaseContext.Consumer>
                {
                    (firebase) => <Component firebase={firebase} {...props} />
                }
            </FirebaseContext.Consumer>

export default withFirebase