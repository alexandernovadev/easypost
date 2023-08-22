import { IPostRepository } from '../../domain/interfaces/post.repository.interface'
import { IUserRepository } from '../../domain/interfaces/user.repository.interface'
import { postMocks, userMocks } from '../../domain/mocks/seed'

export class Testservice {
  constructor(
    private userRepository: IUserRepository,
    private postRepository: IPostRepository
  ) {}

  async seedData() {
    await this.userRepository.deleteAllUser()

    const userNewsMocks = await this.userRepository.inserManyUsers(userMocks) 
    const postNewMocks = await this.postRepository.inserManyPosts(postMocks)


    return "Well Done !!"
  }
}
