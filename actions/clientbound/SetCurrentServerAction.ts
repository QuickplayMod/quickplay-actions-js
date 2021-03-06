import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 13
 * Notify the client that it's changed to a recognized (or unrecognized) server by Quickplay.
 * If server is not recognized or client is not connected to a server, "unknown" should be sent.
 *
 * Quickplay supports multiple servers. When the client reports a serverbound ServerJoinedAction, the server will
 * respond with this, saying what server it thinks the client is currently on, based on the information provided by the client.
 * This will correspond to actions, screens, etc. and what servers they are available on.
 *
 * Payload Order:
 * server name
 * @deprecated Servers are now set client-side. Clients are not required to obey this Action.
 */
class SetCurrentServerAction extends Action {

    static id = 13

    /**
	 * Create a new SetCurrentServerAction.
	 * @param serverName {string} The name of the server that the client has connected to.
     * @deprecated Servers are now set client-side. Clients are not required to obey this Action.
	 */
    constructor (serverName?: string) {
        super()
        this.id = 13

        // Don't add payload if the first payload item wasn't provided
        if(serverName == undefined) {
            return
        }

        this.addPayload(Buffer.from(serverName))
    }
}

export default SetCurrentServerAction
