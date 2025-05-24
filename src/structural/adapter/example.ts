import { EmailValidatorAdapter } from "./class/validation/email-validator-class-adpter";
import { EmailValidatorProtocol } from "./interface/Iemail-validator-protocol";

function validaEmail(emailValidator: EmailValidatorProtocol, email: string) {
    if (emailValidator.isEmail(email)) {
        console.log("Email é válido");
    } else {
        console.log("Email é inválido");
    }
}

validaEmail(new EmailValidatorAdapter(), "benevaniosantos930@mail.com");