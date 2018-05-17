import { RECEIVE_ALL_AVERAGE } from '../constants/DashboardAdminConstants'
import DashboardAdminDto from '../dto/DashboardAdminDto'

export function DashboardAdminReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_AVERAGE:
            return Object.assign({}, state, {
                average: action.average.map(average => new DashboardAdminDto(average))
            })
        default:
            return state
    }
}

export const DashboardAdminReducerStore = {
    average: []
}