import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 31
 * Order for the server to remove a Button from it's database.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Button key
 */
class DeleteButtonAction extends Action {

    static id = 31

    /**
	 * Create a new DeleteButtonAction.
	 * @param key {string} Key of the item the client is requesting to be deleted.
	 */
    constructor (key?: string) {
        super()
        this.id = 31

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
    }
}

export default DeleteButtonAction
