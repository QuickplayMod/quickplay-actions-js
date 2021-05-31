import Action from '../Action'
import {Buffer} from 'buffer'
import RegularExpression from "../../elements/RegularExpression";

/**
 * ID: 55
 * Order for the server to alter a regular expression in it's database. If the regex does not exist, it is created.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Regex key
 * Regular expression
 */
class AlterRegexAction extends Action {

    static id = 55

    /**
     * Create a new AlterRegexAction.
     * @param regex {RegularExpression} The regular expression to alter.
     *          Contains the key to update and the value to update it to.
     */
    constructor (regex?: RegularExpression) {
        super()
        this.id = 55

        // Don't add payload if the first payload item wasn't provided
        if(regex == undefined) {
            return
        }

        this.addPayload(Buffer.from(regex.key))
        this.addPayload(Buffer.from(regex.value))
    }
}

export default AlterRegexAction
