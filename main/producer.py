import pika, json

params = pika.URLParameters('amqps://cgpeiwnx:U0F3l3CgxafQE35gUYflD7umzMJFjKxS@rat.rmq2.cloudamqp.com/cgpeiwnx')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin', body=json.dumps(body), properties=properties)
