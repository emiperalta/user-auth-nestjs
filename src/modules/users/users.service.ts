import { Injectable } from '@nestjs/common';

import { User } from 'common/types';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Emiliano',
      username: 'emi',
      password: '12345',
    },
    {
      id: 2,
      name: 'Walter',
      username: 'wal',
      password: '54321',
    },
  ];

  findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }
}
