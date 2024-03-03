class UserController {
    constructor(private userService: UserService){} // Dependency on specific implementation

    save() {
        this.userService.save();
    }
}

class UserService {
    constructor(private userRepository: UserPostgresRepository) {} // Dependency on specific implementation

    save() {
        this.userRepository.save();
    }
}

class UserPostgresRepository {
    save() {
        console.log("Save user in postgres database");
    }
}


const userPostgresRepository = new UserPostgresRepository();
const userService = new UserService(userPostgresRepository);
const userController = new UserController(userService);

userController.save();


// Now suppose in future we want to replace UserPostGresRepository with UserMongoRepository

// Then as this code is not following DIP so we will have to refactor UserService as well, It is tigtly coupled so it is not scalable
