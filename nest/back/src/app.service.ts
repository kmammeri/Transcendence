import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Array<string> {
    return ['Hello World!', 'Bonjour tout le monde!'];
  }
  getCoucou(): Array<string> {
    return ['Coucou!', 'Coucou!'];
  }
}
