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
                <p key={m.message}> &#9989; <b>{m.jsonPath}</b> {m.message}</p>
            )
          }),
          'invalid': message.map(m => {
            return (
                <p key={m.message}> &#10060; <b>{m.jsonPath}</b> {m.message}</p>
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