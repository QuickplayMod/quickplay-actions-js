import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 30
 * Order for the server to remove a Screen from it's database.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Screen key
 */
class DeleteScreenAction extends Action {

    static id = 30

    /**
	 * Create a new DeleteScreenAction.
     * @param key {string} Key of the item the client is requesting to be deleted.
	 */
    constructor (key?: string) {
        super()
        this.id = 30

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
    }
}

export default DeleteScreenAction
