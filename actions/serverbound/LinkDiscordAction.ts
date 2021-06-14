import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 58
 * Received by the server from un-authed clients when they wish to link a Discord account to a Quickplay
 * account. This is only usable by clients which have authenticated through Discord, but the Discord account
 * they used is not connected to any Quickplay account. If this Action is received in any other context, behaviour
 * is undefined and the server may ignore or reject it.
 *
 * Payload Order:
 * Discord auth code
 */
class LinkDiscordAction extends Action {

    static id = 58

    /**
	 * Create a new LinkDiscordAction.
	 * @param code {string} Authentication code received by the user when they connected to the auth-code-delegating Minecraft server.
	 */
    constructor (code?: string) {
        super()
        this.id = 58

        // Don't add payload if the first payload item wasn't provided
        if(code == undefined) {
            return
        }

        this.addPayload(Buffer.from(code))
    }
}

export default LinkDiscordAction
