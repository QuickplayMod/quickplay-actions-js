import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 2
 * Disable the Quickplay mod for the receiving client.
 *
 * Payload Order:
 * Reason
 */
class DisableModAction extends Action {

    static id = 2

    /**
	 * Create a new DisableModAction.
     * @param reason {string} The reason the mod was disabled
	 */
    constructor (reason?: string) {
        super()
        this.id = 2

        // Don't add payload if the first payload item wasn't provided
        if(reason == undefined) {
            return
        }

        this.addPayload(Buffer.from(reason))
    }
}

export default DisableModAction
