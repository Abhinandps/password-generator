import { IsNotEmpty } from "class-validator";

export class savedPasswordDto {
    email: string;

    @IsNotEmpty()
    username: string;
    
    password: string;
}

