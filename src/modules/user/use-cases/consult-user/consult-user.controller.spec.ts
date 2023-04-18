import { Test, TestingModule } from '@nestjs/testing';
import { ConsultUserController } from './consult-user.controller';

describe('ConsultUserController', () => {
    let controller: ConsultUserController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ConsultUserController],
        }).compile();

        controller = module.get<ConsultUserController>(ConsultUserController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
