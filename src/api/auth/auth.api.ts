import { AxiosInstance } from "axios";
import { LogInDto, SignUpDto } from "./auth.dto";

class AuthAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  signUp = async (signUpDto: SignUpDto) => {
    const response = await this.coreClient.post("/auth/sign-up", signUpDto);
    const data = response.data;
    const accessToken = data.accessToken;

    this.coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    return accessToken;
  };

  logIn = async (logInDto: LogInDto) => {
    const response = await this.coreClient.post("/auth/log-in", logInDto);
    const data = response.data;
    const accessToken = data.accessToken;

    this.coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    return accessToken;
  };
}

export default AuthAPI;
