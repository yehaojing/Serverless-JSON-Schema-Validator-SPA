import json

from aws_lambda_powertools.event_handler import APIGatewayRestResolver, CORSConfig
from aws_lambda_powertools.utilities.validation import validate, SchemaValidationError

cors_config = CORSConfig(allow_origin="*", max_age=300)
app = APIGatewayRestResolver(cors=cors_config)

@app.post("/validate")
def print_name():

    body = app.current_event.json_body
    schema = body.get("schema")
    payload = body.get("payload")

    try:
        validation_result = validate(payload, schema)
        is_valid = True
    except SchemaValidationError as e:
        validation_result = e.validation_message
        is_valid = False

    if validation_result is None:
        validation_result = "Validation passed!"

    return {
        "statusCode": 200,
        "body": {
            "isValid": is_valid,
            "validationResult": validation_result
        },
    }

def lambda_handler(event, context):
    return app.resolve(event, context)
