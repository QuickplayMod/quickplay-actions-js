import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 38
 * Received by the server when the client believes it already has an authenticated session, but the connection was
 * lost.
 *
 * Payload Order:
 * Session token
 */
class AuthReestablishAuthedConnectionAction extends Action {

    static id = 38
    /**
	 * Create a new AuthReestablishAuthedConnectionAction.
     * @param token {string} The session token the client has.
	 */
    constructor (token?: string) {
        super()
        this.id = 38

        if(token == undefined) {
            return
        }

        this.addPayload(Buffer.from(token))
    }
}

export default AuthReestablishAuthedConnectionAction
