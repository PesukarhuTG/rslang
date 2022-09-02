interface LoginResponse {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export default LoginResponse;
