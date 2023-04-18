import { Injectable } from '@nestjs/common';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';

@Injectable()
export class ConsultAllUsersService implements IService {
    constructor(private readonly _consultAllUsersRepository: UserRepository) {}

    async execute(): Promise<IReturnUser[]> {
        const users = await this._consultAllUsersRepository.findAll();

        const returnUsers = users.map(
            (prop) =>
                <IReturnUser>{
                    name: prop.name,
                    email: prop.email,
                },
        );

        return returnUsers;
    }
}
