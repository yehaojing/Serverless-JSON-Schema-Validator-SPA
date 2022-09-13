import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Notification = ({ message, className }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={className}>
      {
        {
          'valid': message.map(m => {
            return (
              <div>
                <p> &#9989; {m.message}</p>
              </div>
            )
          }),
          'invalid': message.map(m => {
            return (
              <div>
                <p> &#10060; {m.message}</p>
              </div>
            )
          }),
          'loading': 
              <div>
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <p>
                        <Skeleton width={300} count={1} />
                    </p>
                </SkeletonTheme>
              </div>
        }[className]
      }
      </div>
  )
}

export default Notification