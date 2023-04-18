import { Controller, Get } from '@nestjs/common';
import { IController, returnHandle } from 'src/interfaces/IController';
import { MeUserService } from './me-user.service';
import { CurrentUser } from 'src/modules/auth/decorators/current-user.decorator';
import { IReturnUser } from 'src/interfaces/IReturnUser';

@Controller()
export class MeUserController implements IController {
    constructor(private readonly _meUserService: MeUserService) {}

    @Get('me')
    async handle(@CurrentUser() user: IReturnUser): Promise<returnHandle> {
        const meUser = await this._meUserService.execute(user.id);

        return {
            message: `${meUser.name} está autenticado !`,
            data: meUser,
        };
    }
}
