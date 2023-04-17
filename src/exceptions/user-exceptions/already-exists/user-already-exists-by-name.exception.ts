import { HttpException } from '@nestjs/common';

export class UserAlreadyExistsByNameException extends HttpException {
    constructor() {
        super('Já existe um usuário cadastrado com esse nome !', 400);
    }
}
