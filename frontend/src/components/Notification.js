const Notification = ({ message, className }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={className}>
        {
          className === 'valid' 
          ? 
            message.map(m => {
              return (
                <div>
                  <p> &#9989; {m.message}</p>
                </div>
              )
          }) 
          : 
            message.map(m => {
              return (
                <div>
                  <p> &#10060; <b>{m.jsonPath}</b> {m.message}</p>
                </div>
              )
          })
        }
      </div>
    )
}

export default Notification