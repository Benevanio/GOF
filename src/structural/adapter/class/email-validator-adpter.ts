import { EmailValidatorProtocol } from './validation/Iemail-validator-protocol';

export class EmailValidatorAdapter implements EmailValidatorProtocol {
    isEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}