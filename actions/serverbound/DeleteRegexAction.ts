import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 56
 * Order for the server to remove a regex from it's database.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Regex key
 */
class DeleteRegexAction extends Action {

    static id = 56

    /**
	 * Create a new DeleteRegexAction.
     * @param key {string} Key of the item the client is requesting to be deleted.
	 */
    constructor (key?: string) {
        super()
        this.id = 56

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
    }
}

export default DeleteRegexAction
