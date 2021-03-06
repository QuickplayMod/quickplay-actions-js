import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 20
 * Received by the server when the client changes locations on Hypixel.
 *
 * Payload Order:
 * Location JSON
 */
class HypixelLocationChangedAction extends Action {

    static id = 20

    /**
	 * Create a new HypixelLocationChangedAction.
	 * @param locationJson {string} JSON about this player's location.
	 */
    constructor (locationJson?: string) {
        super()
        this.id = 20

        // Don't add payload if the first payload item wasn't provided
        if(locationJson == undefined) {
            return
        }

        this.addPayload(Buffer.from(locationJson))
    }
}

export default HypixelLocationChangedAction
