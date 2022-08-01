export type LoadingType = {
    isLoading: boolean
}

const initState: LoadingType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingActionType): LoadingType => {
    switch (action.type) {
        case 'PRELOADER': {
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'PRELOADER',
        payload: {
            isLoading
        }
    } as const
}

type loadingActionType = ReturnType<typeof loadingAC>