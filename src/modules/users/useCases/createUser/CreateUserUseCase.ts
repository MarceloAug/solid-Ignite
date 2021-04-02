import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
	  
        const usersAlreadyExists = this.usersRepository.findByEmail(email);

        if(usersAlreadyExists){
            throw new Error('User Already Exists');
        }
     	const user = this.usersRepository.create({name, email});
		return user;
  }
}

export { CreateUserUseCase };
