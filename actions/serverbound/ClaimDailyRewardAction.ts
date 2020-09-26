import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 49
 * Received by the server when the client is claiming their in-game daily reward.
 * Should only be accepted from Premium users.
 *
 * Payload Order:
 * Option index
 * Security token
 * Reward app data
 */
class ClaimDailyRewardAction extends Action {

    static id = 49

    /**
     * Create a new GetDailyRewardAction.
     * @param option {number} The option the client has requested be claimed. This is an index.
     * @param securityToken {string} Security token, received by {@link SetDailyRewardDataAction}
     * @param appData {Record<string, ?>} App data object, received by {@link SetDailyRewardDataAction}
     */
    constructor (option?: number, securityToken?: string, appData?: Record<string, unknown>) {
        super()
        this.id = 49

        if(option == undefined) {
            return
        }

        const optionBuf = Buffer.alloc(4)
        optionBuf.writeUInt32BE(option, 0)
        this.addPayload(optionBuf)
        this.addPayload(Buffer.from(securityToken))
        this.addPayload(Buffer.from(JSON.stringify(appData)))
    }
}

export default ClaimDailyRewardAction
