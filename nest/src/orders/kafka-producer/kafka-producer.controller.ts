import { Body, Controller, Inject, Post } from '@nestjs/common';
import { Producer } from '@nestjs/microservices/external/kafka.interface';

@Controller('kafka-producers')
export class KafkaProducerController {
  constructor(@Inject('KAFKA_PRODUCER') private kafkaProducer: Producer) {}

  @Post()
  async create(@Body() data) {
    await this.kafkaProducer.send({
      topic: 'createOrder',
      messages: [
        {
          key: 'orders',
          value: JSON.stringify(data),
        },
      ],
    });
  }
}
