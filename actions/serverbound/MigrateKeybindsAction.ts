import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * SERVERBOUND - Server should not instantiate.
 * ID: 21
 * Send the list keybinds to the server so the server can respond with a migrated keybinds list.
 * This is currently only used to migrate keybinds from pre-2.1.0 to post-2.1.0.
 * @see SetKeybindsAction
 *
 * Payload Order:
 * valid JSON that goes into keybinds.json FROM QP 2.0.3 or earlier.
 */
class MigrateKeybindsAction extends Action {

    /**
     * Create a new MigrateKeybindsAction.
     * @param keybinds {Record<string, ?>[]} New keybinds to serialize and send to the server.
     */
    constructor (keybinds?: Record<string, unknown>[]) {
        super()
        this.id = 21

        // Don't add payload if the first payload item wasn't provided
        if(keybinds == undefined) {
            return
        }

        this.addPayload(Buffer.from(JSON.stringify(keybinds)))
    }
}

export default MigrateKeybindsAction
