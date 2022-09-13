import { useState } from 'react'

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.css'; //Example style, you can use another


const ValidateForm = ({ validatePayloadHandler }) => {

    const [payload, setPayload] = useState(`{
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
                        <Editor
                            value={payload}
                            tabSize={4}
                            onValueChange={payload => setPayload(payload)}
                            highlight={payload => highlight(payload, languages.json)}
                            padding={10}
                            className="code"
                        />
                    </div>
                    <div>
                        <h2>
                            Schema
                        </h2>
                        <Editor
                            value={schema}
                            tabSize={4}
                            onValueChange={schema => setSchema(schema)}
                            highlight={schema => highlight(schema, languages.json)}
                            padding={10}
                            className="code"
                        />
                    </div>
                </div>
                <br />
                <button type="submit" className="button-3">Validate</button>
            </form>
        </div>
    )
}

export default ValidateForm