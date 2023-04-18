import { HttpException } from '@nestjs/common';

export class InvalidUserByIdException extends HttpException {
    constructor(httpCode: 400 | 401) {
        super(
            'Não foi possível encontrar o usuário pelo ID fornecido !',
            httpCode,
        );
    }
}
