import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import { REDIS_EXPIRATION } from 'src/config/redis';
import { InvalidUserByIdException } from 'src/exceptions/user-exceptions/invalid/invalid-user-by-id.exception';
import { IReturnUser } from 'src/interfaces/IReturnUser';
import { IService } from 'src/interfaces/IService';
import { UserRepository } from 'src/repositories/abstracts/UserRepository';

@Injectable()
export class ConsultUserService implements IService {
    constructor(
        private readonly _consultUserRepository: UserRepository,
        @InjectRedis() private readonly _redis: Redis,
    ) {}

    async execute(user_id: string): Promise<IReturnUser> {
        const cachedUser = await this._redis.get(`user:${user_id}`);

        if (cachedUser) {
            return JSON.parse(cachedUser);
        }

        const user = await this._consultUserRepository.findById(user_id);

        if (!user) {
            throw new InvalidUserByIdException(400);
        }

        const returnUser: IReturnUser = {
            name: user.name,
            email: user.email,
        };

        await this._redis.set(
            `user:${user_id}`,
            JSON.stringify(returnUser),
            'EX',
            REDIS_EXPIRATION,
        );

        return returnUser;
    }
}
