import { AxiosInstance } from "axios";
import { SignUpDto } from "./auth.dto";

class AuthAPI {
  private coreClient: AxiosInstance;

  constructor(coreClient: AxiosInstance) {
    this.coreClient = coreClient;
  }

  signUp = async (signUpDto: SignUpDto) => {
    const response = await this.coreClient.post("/auth/sign-up", signUpDto);
    const data = response.data;

    return data;
  };
}

export default AuthAPI;
