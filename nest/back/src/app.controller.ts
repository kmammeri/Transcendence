import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { UserService } from "./user/user.service";
import { User } from "./user/user.model";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Get()
  getHello(): Array<string> {
    return this.appService.getCoucou();
  }

  @Get("hello")
  getCoucou(): Array<string> {
    return this.appService.getHello();
  }

  @Get("users")
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
