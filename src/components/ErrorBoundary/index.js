import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error : "",
        hasError : false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError : true,
            error : error.message
        }        
    }

    componentDidCatch (error,errorInfo) {
        console.log(error,errorInfo)
    }

    render () {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }
}

export const Error = () => {
    return (
        <div class="container">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="text-uppercase bg-secondary text-light p-3 fw-bold">Error</div>
                    <h3 style={{ 'text-align': 'center' }}>Malehereusement, quelque chose c'est mal passé!.</h3>;
                </div>
        </div>
    )
}

export default ErrorBoundary