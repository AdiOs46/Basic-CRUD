import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Test HomePage!! Use /customer to test.';
  }
}
