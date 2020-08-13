import Action from '../Action'
import {Buffer} from 'buffer'
import Button from "../../Button";

/**
 * ID: 34
 * Order for the server to alter a Button in it's database. If the Button does not exist, it is created.
 * If the Button passed does not exist and is missing fields, the default is used. If no default is available,
 * then an error message is sent to the client.
 * This should be a protected action, only allowed for admins.
 *
 * Payload Order:
 * Button key
 * JSON serialized Button
 */
class AlterButtonAction extends Action {

    static id = 34

    /**
	 * Create a new AlterButtonAction.
	 * @param key {string} Key of the item the client is requesting to be altered.
     * @param newButton {Button} The new Button to replace at the key. Should not replace values which are undefined.
	 */
    constructor (key?: string, newButton?: Button) {
        super()
        this.id = 34

        // Don't add payload if the first payload item wasn't provided
        if(key == undefined) {
            return
        }

        this.addPayload(Buffer.from(key))
        this.addPayload(Buffer.from(JSON.stringify(newButton)))
    }
}

export default AlterButtonAction
