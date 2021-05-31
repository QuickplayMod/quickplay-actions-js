import Action from '../Action'
import {Buffer} from 'buffer'
import Translation from "../../elements/Translation";

/**
 * ID: 17
 * Set the translation value of a specified key in a specified language.
 *
 * Payload Order:
 * key
 * language
 * value
 */
class SetTranslationAction extends Action {

    static id = 17

    /**
	 * Create a new SetTranslationAction.
     * @param translation {Translation} The translation
	 */
    constructor (translation?: Translation) {
        super()
        this.id = 17

        // Don't add payload if the first payload item wasn't provided
        if(translation == undefined) {
            return
        }

        this.addPayload(Buffer.from(translation.key))
        this.addPayload(Buffer.from(translation.lang))
        this.addPayload(Buffer.from(translation.value || ''))
    }
}

export default SetTranslationAction
