declare global {
    interface StringConstructor {
        Empty: string;
        WhiteSpace: string;
    }
}

String.Empty = '';

String.WhiteSpace = ' ';

export {};
