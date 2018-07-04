import { FormControl } from '@angular/forms';

export function numberValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value || /^\d+$/.test(control.value)) {
        return null;
    }
    return { 'numberValidator': true };
}
