import http from '@/http';
import { ServiceError } from '@/utils/errorUtil';

export async function login({ email, password }) {
  try {
    const {
      data: { user },
    } = await http.post('/users/login', {
      user: {
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    throw new ServiceError({
      message: 'Unauthorize!',
      details: ['Invalid email or password'],
    });
  }
}
