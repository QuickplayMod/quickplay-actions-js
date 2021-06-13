import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 39
 * Notify the client that authentication failed. Optionally specifies the reason, which may change the screen
 * displayed to the user. The reason should not be used as an error message to send to the user, but instead as
 * an identifier for some action or set of actions that the client must take. If you want to tell the user why
 * the authentication failed, a simple message should be sent to the user (via SendChatComponentAction) along with
 * this Action.
 */
class AuthFailedAction extends Action {

    static id = 39

    /**
     * Create a new AuthFailedAction.
     * @param reason {string} The reason for the authentication failure. Optional.
     */
    constructor (reason?: string) {
        super()
        this.id = 39

        // Don't add payload if the first payload item wasn't provided
        if(reason == undefined) {
            return
        }

        this.addPayload(Buffer.from(reason))
    }
}

export default AuthFailedAction
