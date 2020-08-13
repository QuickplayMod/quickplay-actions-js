import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 37
 *
 * Set the array of user counts to be displayed in the user count history graph. Included is the timestamp of the
 * first item in the graph, the timestamp of the last item in the graph, and an array of each item in the graph,
 * in order. It is assumed that each item in the graph is evenly spaced (e.g. index x is y minutes after index x-1 and
 * y minutes before index x+1)
 * This should be a protected Action, only sent to admins.
 *
 * Payload Order:
 * start
 * end
 * array of counts
 */
class SetUserCountHistoryAction extends Action {

    static id = 37

    /**
	 * Create a new SetUserCountHistoryAction.
     * @param start {Date} Datetime for the first item in the array.
     * @param end {Date} Datetime for the last item in the array.
	 * @param arr {number[]} Array of items, assumed to be evenly spaced, with the earliest at the beginning
     * and most recent at the end.
	 */
    constructor (start?: Date, end?: Date, arr?: number[]) {
        super()
        this.id = 37

        // Don't add payload if the first payload item wasn't provided
        if(start == undefined) {
            return
        }
        const startBuf = Buffer.alloc(4)
        startBuf.writeUInt32BE(start.getTime(), 0)
        const endBuf = Buffer.alloc(4)
        endBuf.writeUInt32BE(end.getTime(), 0)
        this.addPayload(startBuf)
        this.addPayload(endBuf)
        this.addPayload(Buffer.from(JSON.stringify(arr)))
    }
}

export default SetUserCountHistoryAction
