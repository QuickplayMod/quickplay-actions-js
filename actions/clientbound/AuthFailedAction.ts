import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 39
 * Notify the client that authentication failed, doesn't specify the reason.
 */
class AuthFailedAction extends Action {

    static id = 39

    /**
     * Create a new AuthFailedAction.
     */
    constructor () {
        super()
        this.id = 39
    }
}

export default AuthFailedAction
