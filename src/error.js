import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(e) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const rootContainer = document.querySelector('.root');
      rootContainer.classList.add('errorContainer')
      return (
        <h1 className = 'errorMessage'>
          Что-то пошло не так!
        </h1>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary }
