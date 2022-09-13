import {useState} from 'react'
import './App.css';
import validateService from './services/validate'

import Notification from './components/Notification'
import ValidateForm from './components/ValidateForm'

const App = () => {
  const [message, updateMessage] = useState(null)
  const [validationNotificationClass, updateValidationNotificationClass] = useState('')

  const validatePayloadHandler = (payload, schema) => {

    const resp = validateService.validatePayload(JSON.parse(payload), JSON.parse(schema))
      .then(resp => {
        console.log(resp)
        if (resp.body.isValid === true) {
          updateMessage([{message: "Payload is valid!"}])
          updateValidationNotificationClass('valid')
        } else {
          updateMessage(resp.body.errors)
          updateValidationNotificationClass('invalid')
        }
      })
  }

  return (
    <div className="App">
        <div>
          <ValidateForm validatePayloadHandler={validatePayloadHandler}/>
        </div>
        <div>
          <Notification message={message} className={validationNotificationClass}/>
        </div>
    </div>
  );
}

export default App;
