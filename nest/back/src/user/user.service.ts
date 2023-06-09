import { Injectable } from '@nestjs/common';
import pool from '../../database.config';

@Injectable()
export class UserService {
  async getUsers() {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM users');
      return result.rows;
    } finally {
      client.release();
    }
  }
}
