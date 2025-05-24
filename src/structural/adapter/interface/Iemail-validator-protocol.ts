export interface EmailValidatorProtocol {
    isEmail(email: string): boolean;
}

export interface EmailValidatorAdapterProtocol {
    (value: string): boolean;
}