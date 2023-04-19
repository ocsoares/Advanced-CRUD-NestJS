import { Injectable } from '@nestjs/common';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';
import { UpdateUserDTO } from './dtos/UpdateUserDTO';
import { InvalidUserByIdException } from 'src/exceptions/user-exceptions/invalid/invalid-user-by-id.exception';
import * as bcrypt from 'bcrypt';
import { InvalidUpdateUserBodyException } from 'src/exceptions/user-exceptions/invalid/invalid-update-user-body.exception';

@Injectable()
export class UpdateUserService implements IService {
    constructor(private readonly _updateUserRepository: UserRepository) {}

    async execute(data: {
        user_id: string;
        updateUserDTO: UpdateUserDTO;
    }): Promise<IReturnUser> {
        const user = await this._updateUserRepository.findById(data.user_id);

        if (!user) {
            throw new InvalidUserByIdException(400);
        }

        const arrayDTO = Object.values(data.updateUserDTO);

        if (arrayDTO.length === 0) {
            throw new InvalidUpdateUserBodyException();
        }

        if (data.updateUserDTO.password) {
            const comparePasswords = await bcrypt.compare(
                data.updateUserDTO.password,
                user.password,
            );

            if (!comparePasswords) {
                data.updateUserDTO.password = await bcrypt.hash(
                    data.updateUserDTO.password,
                    10,
                );
            } else {
                data.updateUserDTO.password = user.password;
            }
        }

        await this._updateUserRepository.updateOneById(
            user.id,
            data.updateUserDTO,
        );

        const returnUser: IReturnUser = {
            name: user.name,
            email: user.email,
        };

        return returnUser;
    }
}
