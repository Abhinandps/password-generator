import { Injectable } from "@nestjs/common";
import { PasswordDto } from "./dto/password.dto";
import { savedPasswordDto } from "./dto/savePassword.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Password, PasswordDocument } from "./schemas/password.schema";
import { Model } from "mongoose";

@Injectable()
export class PasswordService {
    constructor(@InjectModel(Password.name) private passwordModel: Model<PasswordDocument>) { }

    async generatePassword(passwordDto: PasswordDto): Promise<{ password: string; }> {
        try {
            const { length, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters } = passwordDto;

            if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialCharacters) {
                return { password: '' }
            }

            const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
            const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const numberChars = '0123456789';
            const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

            // Combine character set
            let characters = lowercaseChars;
            if (includeUppercase) characters += uppercaseChars;
            if (includeNumbers) characters += numberChars;
            if (includeSpecialCharacters) characters += specialChars;

            // generate
            let generatedPassword = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                generatedPassword += characters.charAt(randomIndex);
            }

            return { password: generatedPassword }
        } catch (err) {
            // throw 
            // console.log(err.message)
        }
    }

    async savePassword(passwordDto: savedPasswordDto): Promise<{ response: string }> {
        try {
            const { email, username, password } = passwordDto

            const createdPassword = new this.passwordModel({
                email,
                username,
                password,
            });

            await createdPassword.save()

            return { response: 'password saved successfully' }
        } catch (err) {

        }
    }

    async getPassword(email: string): Promise<{ res: any }> {
        try {
            const passExists = await this.passwordModel.findOne({
                email: email,
            });

            return { res: passExists }
        } catch (err) {

        }
    }

}