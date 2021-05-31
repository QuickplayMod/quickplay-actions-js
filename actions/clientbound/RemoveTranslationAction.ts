import Action from '../Action'
import {Buffer} from 'buffer'
import Translation from "../../elements/Translation";

/**
 * ID: 45
 * Remove a Translation from the client. If the Translation doesn't exist, nothing happens.
 *
 * Payload Order:
 * key
 * lang
 */
class RemoveTranslationAction extends Action {

    static id = 45

    /**
     * Create a new RemoveTranslationAction.
     * @param translation {Translation} The translation to remove. Only key and lang are used.
     */
    constructor (translation?: Translation) {
        super()
        this.id = 45

        // Don't add payload if the first payload item wasn't provided
        if(translation == undefined) {
            return
        }

        this.addPayload(Buffer.from(translation.key))
        this.addPayload(Buffer.from(translation.lang))
    }
}

export default RemoveTranslationAction
