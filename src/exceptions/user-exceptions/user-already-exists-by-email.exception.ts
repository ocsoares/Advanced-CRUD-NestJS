import { HttpException } from '@nestjs/common';

export class UserAlreadyExistsByEmail extends HttpException {
    constructor() {
        super('Já existe um usuário cadastrado com esse email !', 400);
    }
}
