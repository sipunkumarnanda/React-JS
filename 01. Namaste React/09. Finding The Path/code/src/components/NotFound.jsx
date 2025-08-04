
import {useRouteError} from 'react-router-dom'

const NotFound = () => {
  const err = useRouteError()
  return (
    <div>
        <h1>Page not found</h1>
        <h2>{err?.status + ' : ' + err?.statusText}</h2>
    </div>
  )
}

export default NotFound