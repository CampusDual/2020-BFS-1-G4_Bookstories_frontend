import { UserListsModule } from './user-lists.module';

describe('UserListsModule', () => {
  let userListsModule: UserListsModule;

  beforeEach(() => {
    userListsModule = new UserListsModule();
  });

  it('should create an instance', () => {
    expect(userListsModule).toBeTruthy();
  });
});
