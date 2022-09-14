import {useState} from 'react'
import './App.css';
import validateService from './services/validate'

import Notification from './components/Notification'
import ValidateForm from './components/ValidateForm'

const App = () => {
  const [message, updateMessage] = useState(null)
  const [validationNotificationClass, updateValidationNotificationClass] = useState('')

  const validatePayloadHandler = (payload, schema) => {

    updateMessage([])
    updateValidationNotificationClass('loading')

    validateService.validatePayload(JSON.parse(payload), JSON.parse(schema))
      .then(resp => {
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
        <h1>
            JSON Schema Validator
        </h1>
        <ValidateForm validatePayloadHandler={validatePayloadHandler}/>
        <Notification message={message} className={validationNotificationClass}/>
    </div>
  );
}

export default App;
