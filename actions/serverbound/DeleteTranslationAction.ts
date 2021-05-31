import Action from '../Action'
import {Buffer} from 'buffer'
import Translation from "../../elements/Translation";

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
     * @param translation {Translation} The translation to remove. Only key and lang are used.
	 */
    constructor (translation?: Translation) {
        super()
        this.id = 44

        // Don't add payload if the first payload item wasn't provided
        if(translation == undefined) {
            return
        }

        this.addPayload(Buffer.from(translation.key))
        this.addPayload(Buffer.from(translation.lang))
    }
}

export default DeleteTranslationAction
