export class LoginRequestDto {
  login: string = "";
  password: string = "";
}

export class LoginResponseDto {
  id: number = -1;
  name: string = "";
  login: string = "";
}
