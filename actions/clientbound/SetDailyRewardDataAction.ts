import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 48
 * Store the user's active daily reward data and, if necessary, open up the Daily Reward GUI for in-game claiming.
 * This should only be sent to Premium users, most likely.
 *
 * Payload Order:
 * Reward app data
 * Security token
 * Translation information
 * Google Analytics token
 */
class SetDailyRewardDataAction extends Action {

    static id = 48

    /**
	 * Create a new SetDailyRewardDataAction.
	 * @param appData {Record<string, ?>} daily reward app data object. Contains information about the user's
     * claiming options.
     * @param securityToken {string} state-managing security token used by Hypixel.
     * @param i18n {Record<string, ?>} Translation data
     * @param analyticsToken {string} Google Analytics token. The client can send this to Hypixel's Google Analytics
     * so they have proper analytical data.
	 */
    constructor (appData?: Record<string, unknown>, securityToken?: string, i18n?: Record<string, unknown>,
                 analyticsToken?: string) {
        super()
        this.id = 48

        // Don't add payload if the first payload item wasn't provided
        if(appData == undefined) {
            return
        }

        this.addPayload(Buffer.from(JSON.stringify(appData)))
        this.addPayload(Buffer.from(securityToken))
        this.addPayload(Buffer.from(JSON.stringify(i18n)))
        this.addPayload(Buffer.from(analyticsToken))
    }
}

export default SetDailyRewardDataAction
