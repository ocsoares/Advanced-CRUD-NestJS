import { Controller, Delete, Param } from '@nestjs/common';
import { IController, returnHandle } from 'src/interfaces/IController';
import { DeleteUserService } from './delete-user.service';

@Controller()
export class DeleteUserController implements IController {
    constructor(private readonly _deleteUserService: DeleteUserService) {}

    @Delete('delete/:id')
    async handle(@Param('id') param: string): Promise<returnHandle> {
        const deletedUser = await this._deleteUserService.execute(param);

        return {
            message: `O usuário de email '${deletedUser.email}' foi deletado com sucesso !`,
            data: deletedUser,
        };
    }
}
