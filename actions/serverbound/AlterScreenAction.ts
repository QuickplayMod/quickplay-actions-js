import Action from '../Action'
import {Buffer} from 'buffer'
import Screen from "../../elements/Screen";

/**
 * ID: 33
 * Order for the server to alter a Screen in it's database. If the Screen does not exist, it is created.
 * If the Screen passed does not exist and is missing fields, the default is used. If no default is available,
 * then an error message is sent to the client.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Screen key
 * JSON serialized Screen
 */
class AlterScreenAction extends Action {

    static id = 33

    /**
     * Create a new AlterScreenAction.
     * @param key {string} Key of the item the client is requesting to be altered.
     * @param newScreen {Screen} The new Screen to replace at the key. Should not replace values which are undefined.
     */
    constructor (key?: string, newScreen?: Screen) {
        super()
        this.id = 33

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(JSON.stringify(newScreen)))
    }
}

export default AlterScreenAction
