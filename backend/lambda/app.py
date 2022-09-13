from aws_lambda_powertools.event_handler import APIGatewayRestResolver, CORSConfig
from aws_lambda_powertools.utilities.validation import validate, SchemaValidationError

import jsonschema

cors_config = CORSConfig(allow_origin="*", max_age=300)
app = APIGatewayRestResolver(cors=cors_config)

@app.post("/validate")
def validate_payload():

    body = app.current_event.json_body
    schema = body.get("schema")
    payload = body.get("payload")

    validator = jsonschema.Draft7Validator(schema)
    errors = sorted(validator.iter_errors(payload), key= lambda e: e.json_path)

    if errors == []:
        return {
            "statusCode": 200,
            "body": {
                "isValid": True
            }
        }
    else:
        return {
            "statusCode": 200,
            "body": {
                "isValid": False
                "errors": [{
                    "error": str(e),
                    "validatorValue": str(e.validator_value),
                    "message": str(e.message),
                    "jsonPath": str(e.json_path),
                    "path": str(e.path.popleft()) if e.path else None
                }
                for e in errors
                ]
            } 
        }

def lambda_handler(event, context):
    return app.resolve(event, context)
