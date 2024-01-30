import { IsNotEmpty, IsOptional } from "class-validator";

export class PasswordUpdateDto {

    @IsOptional()
    username: string;

    @IsOptional()
    password: string;
}

