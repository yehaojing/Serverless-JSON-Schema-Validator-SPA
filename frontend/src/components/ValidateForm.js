import { useState } from 'react'

const ValidateForm = ({ validatePayloadHandler }) => {

    const [payload, setPayload] = useState(`
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 21
    }
    `)
    const [schema, setSchema] = useState(`{
      "$id": "https://example.com/person.schema.json",
      "$schema": "https://json-schema.org/draft/2020-12/schema",
      "title": "Person",
      "type": "object",
      "properties": {
        "firstName": {
          "type": "string",
          "description": "The person's first name."
        },
        "lastName": {
          "type": "string",
          "description": "The person's last name."
        },
        "age": {
          "description": "Age in years which must be equal to or greater than zero.",
          "type": "integer",
          "minimum": 0
        }
      }
    }`)

    const validateResult = (event) => {
        event.preventDefault()
        const result = validatePayloadHandler(payload, schema)
    }

    return (
        <div>
            <h1>
                Powertools Schema Validator
            </h1>
            <form onSubmit={validateResult}>
                <div className='side-by-side'>
                    <div>
                        <h2>
                            Payload
                        </h2>
                        <textarea row="rows" cols="cols" value={payload} name="payload" onChange={({ target }) => setPayload(target.value)} />
                    </div>
                    <div>
                        <h2>
                            Schema
                        </h2>
                        <textarea row="rows" cols="cols" value={schema} name="schema" onChange={({ target }) => setSchema(target.value)} />
                    </div>
                </div>
                <br />
                <button type="submit" className="button-3">Validate</button>
            </form>
        </div>
    )
}

export default ValidateForm