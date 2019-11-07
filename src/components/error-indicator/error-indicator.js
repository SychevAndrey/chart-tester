import React from 'react'

const ErrorIndicator = () => {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">Error!</h4>
      <p>Something go wrong, but it's not your fault!</p>
      <hr />
        <p className="mb-0">Try repeat you actions or contact us, please!</p>
    </div>
  )
}

export default ErrorIndicator
