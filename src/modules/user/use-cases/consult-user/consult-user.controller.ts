import { Controller, Get, Param } from '@nestjs/common';
import { IController, returnHandle } from 'src/interfaces/IController';
import { ConsultUserService } from './consult-user.service';

@Controller()
export class ConsultUserController implements IController {
    constructor(private readonly _consultUserService: ConsultUserService) {}

    @Get('consult/:id')
    async handle(@Param('id') param: string): Promise<returnHandle> {
        const consultUser = await this._consultUserService.execute(param);

        return {
            message: 'Usuário encontrado !',
            data: consultUser,
        };
    }
}
