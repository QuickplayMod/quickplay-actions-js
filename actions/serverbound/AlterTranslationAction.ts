import Action from '../Action'
import {Buffer} from 'buffer'
import Translation from "../../elements/Translation";

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
     * @param translation {Translation} Translation to alter or create.
     */
    constructor (translation?: Translation) {
        super()
        this.id = 43

        // Don't add payload if the first payload item wasn't provided
        if(translation == undefined) {
            return
        }

        this.addPayload(Buffer.from(translation.key))
        this.addPayload(Buffer.from(translation.lang))
        this.addPayload(Buffer.from(translation.value))
    }
}

export default AlterTranslationAction
