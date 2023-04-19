import { IUser } from 'src/models/IUser';
import { UpdateUserDTO } from 'src/modules/user/use-cases/update-user/dtos/UpdateUserDTO';

export abstract class UserRepository {
    abstract create(data: IUser): Promise<IUser>;
    abstract findById(id: string): Promise<IUser>;
    abstract findByName(name: string): Promise<IUser>;
    abstract findByEmail(email: string): Promise<IUser>;
    abstract findAll(): Promise<IUser[]>;
    abstract deleteOneById(id: string): Promise<void>;
    abstract updateOneById(id: string, data: UpdateUserDTO): Promise<void>;
}
