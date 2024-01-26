import { Body, Controller, Post } from "@nestjs/common";
import { PasswordDto } from "./dto/password.dto";
import { PasswordService } from "./password.service";



@Controller('api/password')
export class PasswordController {

    constructor(private passwordService: PasswordService) { }


    @Post('generate')
    async generatePassword(@Body() passwordDto: PasswordDto): Promise<{ password: string; }> {
        return await this.passwordService.generatePassword(passwordDto)
    }
}
