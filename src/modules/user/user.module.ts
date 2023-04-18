import { Module } from '@nestjs/common';
import { CreateUserController } from './use-cases/create-user/create-user.controller';
import { CreateUserService } from './use-cases/create-user/create-user.service';
import { LoginUserController } from './use-cases/login-user/login-user.controller';
import { LoginUserService } from './use-cases/login-user/login-user.service';
import { JwtModule } from '@nestjs/jwt';
import { MeUserController } from './use-cases/me-user/me-user.controller';
import { MeUserService } from './use-cases/me-user/me-user.service';
import { ConsultUserController } from './use-cases/consult-user/consult-user.controller';
import { ConsultUserService } from './use-cases/consult-user/consult-user.service';
import { ConsultAllUsersController } from './use-cases/consult-all-users/consult-all-users.controller';
import { ConsultAllUsersService } from './use-cases/consult-all-users/consult-all-users.service';

@Module({
    imports: [
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRATION },
            }),
        }),
    ],
    controllers: [CreateUserController, LoginUserController, MeUserController, ConsultUserController, ConsultAllUsersController],
    providers: [CreateUserService, LoginUserService, MeUserService, ConsultUserService, ConsultAllUsersService],
})
export class UserModule {}
