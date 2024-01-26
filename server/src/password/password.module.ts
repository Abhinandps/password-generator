import { Module } from "@nestjs/common";
import { PasswordController } from "./password.controller";
import { PasswordService } from "./password.service";


@Module({
    imports: [],
    controllers: [PasswordController],
    providers: [PasswordService]
})

export class PasswordModule { }