import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
var ErrorHandler = (function () {
    function ErrorHandler() {
    }
    ErrorHandler.handlerError = function (error) {
        var errorMenssage;
        if (error instanceof Response) {
            errorMenssage = "Erro " + error.status + " ao acessar URL " + error.url + " - " + error.statusText;
        }
        else {
            errorMenssage = error.toString();
        }
        console.log(errorMenssage);
        return Observable.throw(errorMenssage);
    };
    return ErrorHandler;
}());
export { ErrorHandler };
//# sourceMappingURL=app.error-handler.js.map