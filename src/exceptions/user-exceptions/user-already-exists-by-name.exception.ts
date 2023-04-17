import { HttpException } from '@nestjs/common';

export class UserAlreadyExistsByName extends HttpException {
    constructor() {
        super('Já existe um usuário cadastrado com esse nome !', 400);
    }
}
