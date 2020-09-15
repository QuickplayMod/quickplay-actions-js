import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 50
 * Push an edit event into the client's edit history. This should only be sent to admins.
 */
class PushEditHistoryEventAction extends Action {

    static id = 50

    /**
     * Create a new PushEditHistoryEventAction.
     * @param timestamp {Date} Date timestamp of when this edit took place.
     * @param editedBy {number} Account ID of the account which executed this edit.
     * @param itemType {string} Type of item this edit was executing on.
     * Either "screen", "button", "aliased_action" or "translation".
     * @param itemKey {string} The key of the item which was edited in this event.
     * @param deleted {boolean} Whether or not this item was deleted in this event.
     * @param prevVersion {Record<string, ?>} Object containing the previous version of this item, before this edit.
     */
    constructor (timestamp?: Date, editedBy?: number, itemType?: string, itemKey?: string, deleted?: boolean,
                 prevVersion?: Record<string, unknown>) {
        super()
        this.id = 50

        // Don't add payload if the first payload item wasn't provided
        if(timestamp == undefined) {
            return
        }

        const timestampBuf = Buffer.alloc(4)
        timestampBuf.writeUInt32BE(timestamp.getTime() / 1000, 0)
        this.addPayload(timestampBuf)
        const accountIdBuf = Buffer.alloc(4)
        accountIdBuf.writeUInt32BE(editedBy, 0)
        this.addPayload(accountIdBuf)
        this.addPayload(Buffer.from(itemType))
        this.addPayload(Buffer.from(itemKey))
        const deletedBuf = Buffer.alloc(1)
        deletedBuf.writeUInt8(deleted ? 1 : 0, 0)
        this.addPayload(deletedBuf)
        this.addPayload(Buffer.from(JSON.stringify(prevVersion)))
    }
}

export default PushEditHistoryEventAction
