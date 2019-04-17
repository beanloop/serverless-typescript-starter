import {APIGatewayEvent, Context} from 'aws-lambda'
import {hello} from './handler'

describe('hello', () => {
  it('should return 200 OK', async () => {
    const event = {} as APIGatewayEvent
    const context = {} as Context

    const response = await hello(event, context)

    expect(response.statusCode).toBe(200)
  })
})
