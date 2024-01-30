import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PasswordDocument = Password & Document;

@Schema()
export class Password {

    @Prop()
    email: string;

    @Prop()
    username: string;

    @Prop()
    password: string;
}

export const PasswordSchema = SchemaFactory.createForClass(Password);
