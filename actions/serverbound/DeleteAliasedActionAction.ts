import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 32
 * Order for the server to remove an AliasedAction from it's database.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * AliasedAction key
 */
class DeleteAliasedActionAction extends Action {

    static id = 32

    /**
	 * Create a new DeleteAliasedActionAction.
	 * @param key {string} Key of the item the client is requesting to be deleted.
	 */
    constructor (key?: string) {
        super()
        this.id = 32

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
    }
}

export default DeleteAliasedActionAction
