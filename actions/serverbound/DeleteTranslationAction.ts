import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 44
 * Order for the server to remove a translation from it's database.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Translation key
 * Translation lang
 */
class DeleteTranslationAction extends Action {

    static id = 44

    /**
	 * Create a new DeleteTranslationAction.
     * @param key {string} Key of the item the client is requesting to be deleted.
     * @param lang {string} Language of the item the client is requesting to be deleted.
	 */
    constructor (key?: string, lang?: string) {
        super()
        this.id = 44

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(lang))
    }
}

export default DeleteTranslationAction
