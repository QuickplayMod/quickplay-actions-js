import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 29
 * Received by the server when the client is done authenticating with
 * Discord's servers, and Quickplay's backend should check for authenticity.
 *
 * Users can authenticate with either Discord or Minecraft, but Minecraft UUIDs
 * are the core to identifying a user. As such, a request to authenticate over Discord should
 * be entertained initially, but by the end, if the user does not have a link between their
 * Discord account and their Minecraft UUID in the database, they should be rejected.
 *
 * @see https://discord.com/developers/docs/topics/oauth2
 *
 * Payload Order:
 * ID token
 */
class AuthDiscordEndHandshakeAction extends Action {

    static id = 29
    /**
     * Create a new AuthDiscordEndHandshakeAction.
     * @param token {string} The current client's ID token
     * @param handshakeToken {string} The handshake token that was received in {@link AuthBeginHandshakeAction}
     */
    constructor (token?: string, handshakeToken?: string) {
        super()
        this.id = 29

        if(token == undefined) {
            return
        }

        this.addPayload(Buffer.from(token || ''))
        this.addPayload(Buffer.from(handshakeToken || ''))
    }
}

export default AuthDiscordEndHandshakeAction
