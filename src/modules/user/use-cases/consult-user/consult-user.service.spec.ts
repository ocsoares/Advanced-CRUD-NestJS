import { Test, TestingModule } from '@nestjs/testing';
import { ConsultUserService } from './consult-user.service';

describe('ConsultUserService', () => {
    let service: ConsultUserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConsultUserService],
        }).compile();

        service = module.get<ConsultUserService>(ConsultUserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
