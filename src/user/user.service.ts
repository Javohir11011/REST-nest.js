import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private usersModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.usersModel(createUserDto);
    await newUser.save();
    return newUser;
  }

  async findAll() {
    const allUsers = await this.usersModel.find();
    return allUsers;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.usersModel.findById(id);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const edidedUser = this.usersModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
    return edidedUser;
  }

  async remove(id: string) {
    const delUser = this.usersModel.findByIdAndDelete(id);
    return delUser;
  }
}
