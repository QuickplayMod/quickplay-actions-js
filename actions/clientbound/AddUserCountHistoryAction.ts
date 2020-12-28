import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 37
 *
 * Add a datapoint to the client's cached list of datapoints within the graph of active connections. Optionally also
 * clears the cache.
 * This should be a protected Action, only sent to admins.
 *
 * Payload Order:
 * timestamp
 * user count at timestamp
 * clear cache flag
 */
class AddUserCountHistoryAction extends Action {

    static id = 37

    /**
     * Create a new AddUserCountHistoryAction.
     * @param timestamp Timestamp of this active connection count.
     * @param connectionCount Total number of active connections to the backend at the given timestamp.
     * @param clearCache Flag whether the cached history should be reset, or this data point should just be added
     *  to the current cache. This flag should be true
     */
    constructor (timestamp?: Date, connectionCount?: number, clearCache?: boolean) {
        super()
        this.id = 37

        // Don't add payload if the first payload item wasn't provided
        if(timestamp == undefined) {
            return
        }
        const startBuf = Buffer.alloc(4)
        startBuf.writeUInt32BE(timestamp.getTime() / 1000, 0)
        this.addPayload(startBuf)
        const connectionCountBuf = Buffer.alloc(4);
        connectionCountBuf.writeUInt32BE(connectionCount, 0);
        this.addPayload(connectionCountBuf);
        const clearCacheBuf = Buffer.alloc(1)
        clearCacheBuf.writeUInt8(clearCache ? 1 : 0, 0)
        this.addPayload(clearCacheBuf);
    }
}

export default AddUserCountHistoryAction
