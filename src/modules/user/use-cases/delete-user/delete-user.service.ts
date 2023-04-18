import { Injectable } from '@nestjs/common';
import { InvalidUserByIdException } from 'src/exceptions/user-exceptions/invalid/invalid-user-by-id.exception';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';

@Injectable()
export class DeleteUserService implements IService {
    constructor(private readonly _deleteUserRepository: UserRepository) {}

    async execute(user_id: string): Promise<IReturnUser> {
        const user = await this._deleteUserRepository.findById(user_id);

        if (!user) {
            throw new InvalidUserByIdException(400);
        }

        const returnUser: IReturnUser = {
            name: user.name,
            email: user.email,
        };

        await this._deleteUserRepository.deleteOneById(user_id);

        return returnUser;
    }
}
