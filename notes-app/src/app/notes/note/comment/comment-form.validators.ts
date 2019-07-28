import {FormControl, ValidationErrors} from '@angular/forms';

export class CommentFormValidators {
    public static CountOfWordsValidator = (countOfWords: number) => {
        return (control: FormControl): ValidationErrors | null => {
            try {
                if (control.value) {
                    let inputValue = control.value.trim();

                    // tslint:disable-next-line:triple-equals
                    if (inputValue.split(/\s+/).length != countOfWords) {
                        return {wrongWordsCount: true};
                    }
                }

                return null;
            } catch {
                return {wrongWordsCount: true};
            }
        };
    };

    public static WordsUppercaseValidator = (control: FormControl): ValidationErrors | null => {
        try {
            if (control.value) {
                let inputValue = control.value.trim() as string;

                if (inputValue.split(/\s+/).some(word => word === word.toLowerCase())) {
                    return {wrongWordsCase: true};
                }
            }

            return null;
        } catch {
            return {wrongWordsCase: true};
        }
    };
}
