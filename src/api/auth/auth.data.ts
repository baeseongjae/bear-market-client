export type SignUpData = {
  accessToken: string;
};

export type LogInData = SignUpData;

export type GetUserData = {
  userByEmail: {
    id: string;
    email: string;
    encryptedPassword: string;
    createdAt: string;
  };
};
