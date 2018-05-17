import {RECEIVE_ALL_AVERAGE} from '../constants/DashboardAdminConstants'
import ApplicationConf from '../../conf/ApplicationConf'
import { toast, toastError, getJson } from '../../utils/MaterializeUtil'

const DashboardAdminAction = {
    receiveAverage(average) {
        return {
            type: RECEIVE_ALL_AVERAGE,
            average: average
        }
    },

    fetchAverage() {
        return (dispatch) => {
            return fetch(ApplicationConf.admin.getAverage(), {
                method: 'GET',
            })
            .then(getJson)
            .then((json = []) => {
                dispatch(DashboardAdminAction.receiveAverage(json))
            })
            .catch(err => {
                toastError(err)
            })
        }
    }
}

export default DashboardAdminAction