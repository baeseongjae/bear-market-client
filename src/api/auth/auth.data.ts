export type SignUpData = {
  accessToken: string;
};

export type LogInData = SignUpData;

export type GetUserData = {
  id: string;
  email: string;
  encryptedPassword: string;
  createdAt: string;
};
