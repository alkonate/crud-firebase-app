import database from './../DatabaseService'
const WithDatabaseService = Component => props => <Component database={database} {...props} />

export default WithDatabaseService