import { path } from './basepath'

export default {
    admin: {
        userPath() {
            return path + 'user/stat'
        },
        getAverage() {
            return this.userPath()
        }
    }
}