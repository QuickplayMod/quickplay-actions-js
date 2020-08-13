import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 36
 *
 * Set the current number of clients connected to the Quickplay backend.
 * This should be a protected Action, only sent to Admins.
 *
 * Payload Order:
 * client count
 */
class SetCurrentUserCountAction extends Action {

    static id = 36

    /**
	 * Create a new SetCurrentUserCountAction.
	 * @param count {number} The total number of connected clients at the time of this Action being sent.
	 */
    constructor (count?: number) {
        super()
        this.id = 36

        // Don't add payload if the first payload item wasn't provided
        if(count == undefined) {
            return
        }

        const buf = Buffer.alloc(4)
        buf.writeInt32BE(count, 0)
        this.addPayload(buf)
    }
}

export default SetCurrentUserCountAction
