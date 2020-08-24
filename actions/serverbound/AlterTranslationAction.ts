import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 43
 * Order for the server to alter a translation in it's database. If the translation does not exist, it is created.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Translation key
 * Translation language (lower case)
 * Translation value
 */
class AlterTranslationAction extends Action {

    static id = 43

    /**
     * Create a new AlterTranslationAction.
     * @param key {string} Key of the item the client is requesting to be altered.
     * @param lang {string} Language of the item to be altered.
     * @param value {string} Value to set the key/language pair to.
     */
    constructor (key?: string, lang?: string, value?: string) {
        super()
        this.id = 43

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(lang))
        this.addPayload(Buffer.from(value))
    }
}

export default AlterTranslationAction
