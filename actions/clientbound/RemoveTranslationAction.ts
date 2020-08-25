import Action from '../Action'
import {Buffer} from 'buffer'

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
     * @param key {string} Key of the translation to be removed, if it exists.
     * @param lang {string} Language of the translation to remove.
     */
    constructor (key?: string, lang?: string) {
        super()
        this.id = 45

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(lang))
    }
}

export default RemoveTranslationAction
