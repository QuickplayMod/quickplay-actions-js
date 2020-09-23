import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 51
 * Received by the server from the client when the client wishes to notify
 * the server of it's current settings. This would typically be at initialization,
 * or whenever the user changes their settings.
 *
 * Settings are received by the server in order to allow for the server to
 * be able to send different data depending on the client's settings.
 *
 * Payload Order:
 * Settings data JSON
 */
class SetClientSettingsAction extends Action {

    static id = 51

    /**
     * Create a new ServerJoinedAction.
     * @param settingsData {Record<string, ?>} The client's settings object.
     */
    constructor (settingsData: Record<string, unknown>) {
        super()
        this.id = 51

        // Don't add payload if the first payload item wasn't provided
        if(settingsData == undefined) {
            return
        }

        this.addPayload(Buffer.from(JSON.stringify(settingsData)))
    }
}

export default SetClientSettingsAction
