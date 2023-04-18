import { Test, TestingModule } from '@nestjs/testing';
import { ConsultAllUsersService } from './consult-all-users.service';

describe('ConsultAllUsersService', () => {
    let service: ConsultAllUsersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConsultAllUsersService],
        }).compile();

        service = module.get<ConsultAllUsersService>(ConsultAllUsersService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
