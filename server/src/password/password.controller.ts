import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PasswordDto } from "./dto/password.dto";
import { PasswordService } from "./password.service";
import { savedPasswordDto } from "./dto/savePassword.dto";
import { PasswordUpdateDto } from "./dto/passwordUpdateDto";



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
    async getPasswords(@Param('email') email: string) {
        return await this.passwordService.getPasswords(email)
    }

    @Get(':Id')
    async getPassword(@Param('email') email: string) {
        return await this.passwordService.getPassword(email)
    }

    @Put(':Id')
    async updatePassword(@Param('Id') Id: string, @Body() passwordUpdateDto: PasswordUpdateDto) {
        return await this.passwordService.updatePassword(Id, passwordUpdateDto)
    }

    @Delete(':Id')
    async deletePassword(@Param('Id') Id: string) {
        return await this.passwordService.deletePassword(Id)
    }

}
