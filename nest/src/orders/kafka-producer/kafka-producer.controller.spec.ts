import { Test, TestingModule } from '@nestjs/testing';
import { KafkaProducerController } from './kafka-producer.controller';

describe('KafkaProducerController', () => {
  let controller: KafkaProducerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KafkaProducerController],
    }).compile();

    controller = module.get<KafkaProducerController>(KafkaProducerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
