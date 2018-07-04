import { Observable, of, throwError } from 'rxjs';

export function handlerError<T>(action: string = 'action', result?: T) {
    return (error: any): Observable<T> => {
        this.logger.debug(action);
        return of(result);
    };
}

export function handlerCrudError() {
    return (error: any) => {
        this.logger.debug(error.message);
        let messages: string[] = [];
        if (error.error.ModelState) {
            for (const field in error.error.ModelState) {
                messages = messages.concat(error.error.ModelState[field]);
            }
        } else {
            messages.push(error.message);
        }

        return throwError({
            messages: messages
        });
    };
}
