import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { ActionTypes } from "src/app/auth/store/actionTypes";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{request: RegisterRequestInterface }>()
)

export const registerSucessAction = createAction(
    ActionTypes.REGISTER_SUCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const registerFailureAction = createAction(
    ActionTypes.REGISTER_FAILURE
)()