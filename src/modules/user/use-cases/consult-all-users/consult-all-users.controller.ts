import { Controller, Get } from '@nestjs/common';
import { IController, returnHandle } from 'src/interfaces/IController';
import { ConsultAllUsersService } from './consult-all-users.service';

@Controller()
export class ConsultAllUsersController implements IController {
    constructor(
        private readonly _consultAllUsersService: ConsultAllUsersService,
    ) {}

    @Get('consult')
    async handle(): Promise<returnHandle> {
        const consultAllUsers = await this._consultAllUsersService.execute();

        return {
            message: 'Todos os usuários foram encontrados !',
            data: consultAllUsers,
        };
    }
}
