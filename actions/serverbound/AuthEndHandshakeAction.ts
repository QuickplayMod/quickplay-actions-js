import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 27
 * Received by the server when the client is done authenticating with
 * Mojang's servers, and Quickplay's backend should check for authenticity.
 *
 * Payload Order:
 * Minecraft username
 */
class AuthEndHandshakeAction extends Action {

    static id = 27
    /**
	 * Create a new AuthEndHandshakeAction.
     * @param username {string} The current client's username
	 */
    constructor (username?: string) {
        super()
        this.id = 27

        if(username == undefined) {
            return
        }

        this.addPayload(Buffer.from(username || ''))
    }
}

export default AuthEndHandshakeAction
