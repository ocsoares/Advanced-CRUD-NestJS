import { HttpException } from '@nestjs/common';

export class InvalidUpdateUserBodyException extends HttpException {
    constructor() {
        super(`Update 'name', 'email' or 'password'`, 400);
    }
}
