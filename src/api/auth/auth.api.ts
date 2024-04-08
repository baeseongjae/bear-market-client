import { Response } from "@/types/Response.type";
import { AxiosInstance } from "axios";
import { GetUserData, LogInData, SignUpData } from "./auth.data";
import { LogInDto, SignUpDto } from "./auth.dto";

class AuthAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  signUp = async (signUpDto: SignUpDto) => {
    const response = await this.coreClient.post<Response<SignUpData>>(
      "/auth/sign-up",
      signUpDto
    );
    const data = response.data;

    if (!data.success) throw new Error(data.error.message);

    const { accessToken } = data.result;
    this.coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    return accessToken;
  };

  logIn = async (logInDto: LogInDto) => {
    const response = await this.coreClient.post<Response<LogInData>>(
      "/auth/log-in",
      logInDto
    );
    const data = response.data;

    if (!data.success) throw new Error(data.error.message);

    const { accessToken } = data.result;
    this.coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    return accessToken;
  };

  logOut = () => {
    this.coreClient.defaults.headers.common.Authorization = ``;
  };

  getUserEmail = async () => {
    const response = await this.coreClient.get<Response<GetUserData>>(
      "/auth/user-email"
    );
    const data = response.data;

    if (!data.success) throw new Error(data.error.message);

    const { userByEmail: user } = data.result;

    return user;
  };
}

export default AuthAPI;
