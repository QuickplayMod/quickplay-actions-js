import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 29
 * Received by the server when the client is done authenticating with
 * Google's servers, and Quickplay's backend should check for authenticity.
 *
 * Users can authenticate with either Google or Minecraft, but Minecraft UUIDs
 * are the core to identifying a user. As such, a request to authenticate over Google should
 * be entertained initially, but by the end, if the user does not have a link between their
 * Google account and their Minecraft UUID in the database, they should be rejected.
 *
 * @see https://developers.google.com/identity/sign-in/web/sign-in
 * @see https://developers.google.com/identity/sign-in/web/backend-auth
 *
 * Payload Order:
 * ID token
 */
class AuthGoogleEndHandshakeAction extends Action {

    static id = 29
    /**
	 * Create a new AuthGoogleEndHandshakeAction.
     * @param token {string} The current client's ID token
	 */
    constructor (token?: string) {
        super()
        this.id = 29

        if(token == undefined) {
            return
        }

        this.addPayload(Buffer.from(token || ''))
    }
}

export default AuthGoogleEndHandshakeAction
