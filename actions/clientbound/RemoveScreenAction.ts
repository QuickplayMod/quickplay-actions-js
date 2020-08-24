import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 40
 * Remove a Screen from the client. If the Screen doesn't exist, nothing happens.
 *
 * Payload Order:
 * key
 */
class RemoveScreenAction extends Action {

    static id = 40

    /**
     * Create a new RemoveScreenAction.
     * @param screenKey {string} Key of the Screen to be removed, if it exists.
     */
    constructor (screenKey?: string) {
        super()
        this.id = 40

        // Don't add payload if the first payload item wasn't provided
        if(screenKey == undefined) {
            return
        }

        this.addPayload(Buffer.from(screenKey))
    }
}

export default RemoveScreenAction
