import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 47
 * Received by the server when the client is requesting their in-game daily reward data.
 * Should only be accepted from Premium users.
 *
 * Payload Order:
 * Code
 */
class GetDailyRewardAction extends Action {

    static id = 47

    /**
     * Create a new GetDailyRewardAction.
     * @param code {string} The Daily Reward code found in the daily reward URL.
     */
    constructor (code?: string) {
        super()
        this.id = 47

        if(code == undefined) {
            return
        }

        this.addPayload(Buffer.from(code))
    }
}

export default GetDailyRewardAction
