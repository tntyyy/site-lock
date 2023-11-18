import { ApiProperty } from "@nestjs/swagger";

export class SignUpBodyDto {
  @ApiProperty({
    example: "test@gmail.com",
  })
  email: string;

  @ApiProperty({
    example: "password123",
  })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: "test@gmail.com",
  })
  email: string;

  @ApiProperty({
    example: "password123",
  })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
