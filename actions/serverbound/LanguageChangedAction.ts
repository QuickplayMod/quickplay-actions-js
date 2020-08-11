import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 22
 * Received by the server when the client changes languages.
 *
 * Payload Order:
 * New language ID
 */
class LanguageChangedAction extends Action {

    static id = 22

    /**
	 * Create a new LanguageChangedAction.
	 * @param langId {string} New language ID
	 */
    constructor (langId?: string) {
        super()
        this.id = 22

        // Don't add payload if the first payload item wasn't provided
        if(langId == undefined) {
            return
        }

        this.addPayload(Buffer.from(langId))
    }
}

export default LanguageChangedAction
