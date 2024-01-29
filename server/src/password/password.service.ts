import { Injectable } from "@nestjs/common";
import { PasswordDto } from "./dto/password.dto";

@Injectable()
export class PasswordService {
    // constructor(@Injectable)

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

}