import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 4
 * Send a message to the client's system.out. Mainly used for debugging.
 */
class SystemOutAction extends Action {

    static id = 4

    /**
	 * Create a new SystemOutAction.
	 * @param message {string} the message to send to the client's logs
	 */
    constructor (message?: string) {
        super()
        this.id = 4

        // Don't add payload if the first payload item wasn't provided
        if(message == undefined) {
            return
        }

        this.addPayload(Buffer.from(message))
    }
}

export default SystemOutAction
