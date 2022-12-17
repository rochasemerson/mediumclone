import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSucessAction } from "src/app/auth/store//actions/register.action";

@Injectable()
export class RegisterEffect {
    effectName$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({request}) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return registerSucessAction({currentUser})
                }),
                
                catchError(() => {
                    return of(registerFailureAction)
                })
            )
        })
    )
)

    constructor(private actions$: Actions, private authService: AuthService) {}
}