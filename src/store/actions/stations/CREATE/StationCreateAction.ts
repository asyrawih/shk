import { Dispatch } from 'redux'
import { API } from '../../../../services/api'
import { Cookies } from 'react-cookie'
import { StationActionDispatch, STATION_CREATE_FAIL } from './StationCreateActionTypes'
const cookies = new Cookies()

export const storeStation = () => async (dispatch: Dispatch<StationActionDispatch>) => {
    try {
        // Call STATE
        dispatch({ type: 'STATION_CREATE_LOADING' })
        // Fetch To API
        const res = await API.post(`api/v1/stations`, { headers: { 'Authorization': 'Bearer ' + cookies.get('SHK') } })
        dispatch({ type: 'STATION_CREATE_SUCCESS', payload: res.data })
    } catch (error) {
        dispatch({ type: STATION_CREATE_FAIL, message: error })
    }
}