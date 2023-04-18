import { Test, TestingModule } from '@nestjs/testing';
import { ConsultAllUsersController } from './consult-all-users.controller';

describe('ConsultAllUsersController', () => {
    let controller: ConsultAllUsersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ConsultAllUsersController],
        }).compile();

        controller = module.get<ConsultAllUsersController>(
            ConsultAllUsersController,
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
