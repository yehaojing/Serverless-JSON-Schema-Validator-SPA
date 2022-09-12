const Notification = ({ message, className }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={className}>
        {className === 'valid' ? 
            <p>
                &#9989; {message}
            </p>
            :
            <p>
                
                &#10060; {message}
            </p>
        }
      </div>
    )
}

export default Notification