// @ts-ignore
import moment from 'moment'

import Taro  from "@tarojs/taro";

function setExpire(data:any, expire:any) {
    data = { data }
    if (expire) {
        if (typeof expire === 'string' || typeof expire === 'number') {
            data._expireTime = moment().add(+expire, 'd')
        } else if (typeof expire === 'object') {
            data._expireTime = moment().add(+expire.time, expire.unit)
        }
    }
    return data
}
function getData(key:string, res:any):any {
    if (res.data) {
        const { data, _expireTime } = res
        if (_expireTime) {
            if (moment(_expireTime).isAfter()) {
                return data
            } else {
                Taro.removeStorageSync(key)
                return undefined
            }
        } else {
            return data
        }
    } else {
        return res
    }
}

export const Local = {
    // Add type annotations for key, data and expire parameters
    set(key: string, data: any, expire?: number|object) {
        const res = setExpire(data, expire)
        Taro.setStorageSync(key, JSON.stringify(res))
    },
    // Add type annotation for key parameter and return type
    get(key: string): any {
        const data = JSON.parse(Taro.getStorageSync(key) || '{}') // Use || operator to avoid null value
        const res = getData(key, data)
        if (res && typeof res === 'object' && Object.keys(res).length === 0) {
            return undefined
        }
        return res
    },
    // Add type annotation for key parameter
    remove(key: string) {
        Taro.removeStorageSync(key)
    },
    clear() {
        Taro.clearStorage()
    },
}

