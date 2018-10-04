enum UserStatus {
  ok, no,
}

interface IUserQuery {
  accountId: string,
  name: string,
  email: string,
  auth: string,
}

interface IUser {
  id?: number,
  accountId: string,
  name: string,
  email: string,
  auth: string,
  status: UserStatus,
  createDate: string, // date
}

const userApi = {
  listUser(query: IUserQuery): IUser[] {
    return [];
  },
  getUser(id: number): IUser {
    return {
      id: 1,
      accountId: 'kdo',
      name: 'kdo',
      email: 'kdo@gmail.com',
      auth: 'admin',
      status: 1,
      createDate: '2015-01-12',
    };
  },
  update(): IUser {
    return {
      id: 1,
      accountId: 'kdo',
      name: 'kdo',
      email: 'kdo@gmail.com',
      auth: 'admin',
      status: 1,
      createDate: '2015-01-12',
    };
  },
  remove(id: number) {

  },
  create(): IUser {
    return {
      id: 1,
      accountId: 'kdo',
      name: 'kdo',
      email: 'kdo@gmail.com',
      auth: 'admin',
      status: 1,
      createDate: '2015-01-12',
    };
  },
};

export default userApi;