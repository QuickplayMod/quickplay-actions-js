import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 28
 * Finalize authentication by sending the client a session token and when this session expires
 *
 * Payload Order:
 * Session token
 * Expiration timestamp
 */
class AuthCompleteAction extends Action {

    static id = 28

    /**
     * Create a new AuthCompleteAction.
     * @param sessionToken {string} Session token to send
     * @param expiration {Date} Timestamp at which this session expires
     */
    constructor (sessionToken?: string, expiration?: Date) {
        super()
        this.id = 28
        if(sessionToken == undefined || expiration == undefined) {
            return
        }

        this.addPayload(Buffer.from(sessionToken))
        const buf = Buffer.alloc(4)
        buf.writeUInt32BE(expiration.getTime() / 1000, 0)
        this.addPayload(buf)
    }
}

export default AuthCompleteAction
