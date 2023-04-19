import { Body, Controller, Param, Patch } from '@nestjs/common';
import { IController, returnHandle } from 'src/interfaces/IController';
import { UpdateUserService } from './update-user.service';
import { UpdateUserDTO } from './dtos/UpdateUserDTO';

@Controller()
export class UpdateUserController implements IController {
    constructor(private readonly _updateUserService: UpdateUserService) {}

    @Patch('update/:id')
    async handle(
        @Param('id') param: string,
        @Body() body: UpdateUserDTO,
    ): Promise<returnHandle> {
        const user = await this._updateUserService.execute({
            user_id: param,
            updateUserDTO: body,
        });

        return {
            message: `O usuário de email '${user.email}' foi atualizado com sucesso !`,
        };
    }
}
