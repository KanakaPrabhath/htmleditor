import React from 'react';
import PropTypes from 'prop-types';

/**
 * ErrorBoundary - Catches React errors and displays a fallback UI
 * Prevents the entire app from crashing due to component errors
 * 
 * Usage:
 * <ErrorBoundary fallback={<div>Something went wrong</div>}>
 *   <YourComponent />
 * </ErrorBoundary>
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('[ErrorBoundary] Caught error:', error);
    console.error('[ErrorBoundary] Error info:', errorInfo);

    this.setState({
      error,
      errorInfo
    });

    // Call optional error callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });

    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div style={{
          padding: '20px',
          margin: '20px',
          border: '2px solid #f44336',
          borderRadius: '4px',
          backgroundColor: '#ffebee',
          color: '#c62828'
        }}>
          <h2 style={{ marginTop: 0 }}>⚠️ Something went wrong</h2>
          <p>The editor encountered an unexpected error and couldn't continue.</p>
          
          {this.props.showDetails && this.state.error && (
            <details style={{ 
              marginTop: '10px', 
              padding: '10px', 
              backgroundColor: 'white',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'monospace'
            }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                Error Details
              </summary>
              <pre style={{ 
                marginTop: '10px', 
                overflow: 'auto',
                maxHeight: '200px'
              }}>
                {this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
          )}
          
          <button
            onClick={this.handleReset}
            style={{
              marginTop: '15px',
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
  onError: PropTypes.func,
  onReset: PropTypes.func,
  showDetails: PropTypes.bool
};

ErrorBoundary.defaultProps = {
  fallback: null,
  onError: undefined,
  onReset: undefined,
  showDetails: process.env.NODE_ENV === 'development'
};

export default ErrorBoundary;
