import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 26
 * Begin authentication with the backend by sending a handshake token to the client.
 * The handshakeToken is a randomly-generated token used during authentication. It may be used in different ways
 * depending on your authentication method.
 * @see https://discord.com/developers/docs/topics/oauth2
 * @see https://wiki.vg/Authentication
 *
 * Payload Order:
 * Handshake token
 */
class AuthBeginHandshakeAction extends Action {

    static id = 26

    /**
	 * Create a new AuthBeginHandshakeAction.
	 * @param handshakeToken {string} Handshake token to send
	 */
    constructor (handshakeToken?: string) {
        super()
        this.id = 26
        if(handshakeToken == undefined) {
            return
        }

        this.addPayload(Buffer.from(handshakeToken))
    }
}

export default AuthBeginHandshakeAction
