export type loginSchema = {
    password: string;
    email: string
  };

export type ApiLoginResponse = {
  access_token : string
}