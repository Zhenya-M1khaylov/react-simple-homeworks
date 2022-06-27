import {UserType} from '../HW8';

type homeWorkReducerType = sortType | checkType

type sortType = { type: 'sort', payload: 'up' | 'down'}
type checkType = { type: 'check', payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const newSortedState = [...state].sort((a,b)=>{
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else return 0
            })
            return action.payload === 'up' ? newSortedState : newSortedState.reverse()
        }
        case 'check': {
            return state.filter(a => a.age >= action.payload)
        }
        default: return state
    }
}