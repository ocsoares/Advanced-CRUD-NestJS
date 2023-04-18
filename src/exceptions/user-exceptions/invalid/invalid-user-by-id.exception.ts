import { HttpException } from '@nestjs/common';

export class InvalidUserByIdException extends HttpException {
    constructor() {
        super('Não foi possível encontrar o usuário pelo ID fornecido !', 401);
    }
}
