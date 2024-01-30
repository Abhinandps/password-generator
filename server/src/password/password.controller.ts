import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PasswordDto } from "./dto/password.dto";
import { PasswordService } from "./password.service";
import { savedPasswordDto } from "./dto/savePassword.dto";



@Controller('api/password')
export class PasswordController {

    constructor(private passwordService: PasswordService) { }


    @Post('generate')
    async generatePassword(@Body() passwordDto: PasswordDto): Promise<{ password: string; }> {
        return await this.passwordService.generatePassword(passwordDto)
    }

    @Post('save')
    async savePassword(@Body() passwordDto: savedPasswordDto): Promise<{ response: string; }> {
        return await this.passwordService.savePassword(passwordDto)
    }


    @Get(':email')
    async getPassword(@Param('email') email: string) {
        return await this.passwordService.getPassword(email)
    }
}
