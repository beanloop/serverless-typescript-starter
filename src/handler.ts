import {APIGatewayEvent, Callback, Context} from 'aws-lambda'

type Response = {
  statusCode: number
  body: string
}

export const hello: (
  event: APIGatewayEvent,
  context: Context,
  callback?: Callback
) => Promise<Response> = async (event: APIGatewayEvent) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello from lambda!',
    input: event,
  }),
})
