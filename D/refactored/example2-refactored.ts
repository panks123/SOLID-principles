interface Repository {
    save() : void
}

interface Service {
    save() : void
}

class UserControllerr {
    constructor(private service: Service){} // Dependency on abstraction (Service interface)

    save() {
        this.service.save();
    }
}

class UserServicee implements Service{
    constructor(private repository: Repository) {} // Dependency on abstraction (Repository interface)

    save() {
        this.repository.save();
    }
}

// For replacing UserService with NewUserService
class NewUserService implements Service{
    constructor(private repository: Repository) {} // Dependency on abstraction (Repository interface)

    save(): void {
        this.repository.save();
    }
}

class UserPostgresRepositoryy implements Repository{ // implements the same Repository interface
    save() {
        console.log("Save user in postgres database");
    }
}

class UserMongoRepositoryy implements Repository{ // implements the same Repository interface
    save() {
        console.log("Save user in mongo database");
    }
}


// const userPostgresRepositoryy = new UserPostgresRepositoryy();
// const userServicee = new UserServicee(userPostgresRepositoryy);


// Now suppose in future we want to replace it with
// const userMongoRepository = new UserMongoRepositoryy();
// const userServicee = new UserServicee(userMongoRepository);

// Now suppose we want to replace it with FakeUserReposityry for testing

class FakeUserReposityry implements Repository {
    save(): void {
        console.log("Save user in fake database")
    }
}

const fakeRepository = new FakeUserReposityry();
// const userServicee = new UserServicee(fakeRepository);
const newUserService = new NewUserService(fakeRepository);

// So we can see that we easily replaced UserPostgresRepositoryy with UserMongoRepositoryy and FakeUserRepository without refactoring UserServicee
// This was possible because our code was following DIP

// const userControllerr = new UserControllerr(userServicee);
const userControllerr = new UserControllerr(newUserService);


userControllerr.save();