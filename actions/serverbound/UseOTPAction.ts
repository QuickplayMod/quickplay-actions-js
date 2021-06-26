import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 58
 * Received by the server from clients when they wish to authenticate their Minecraft account in some way without
 * having to provide their Mojang/Microsoft account details. Users can generate a code by connecting to a the
 * Quickplay authentication Minecraft server. It is then safe to assume the user's identity wherever the password
 * is used (assuming passwords expire within a short period of time). For extra added security, the user's Minecraft
 * UUID or username may also be provided depending on the use case, but it's not required.
 *
 * The main uses of UseOTPAction right now are:
 * - Linking Discord/Patreon accounts to the user's Minecraft account
 * - Logging into a web panel via Minecraft
 *
 * Payload Order:
 * OTP code
 * Context
 * Minecraft UUID or username
 */
class UseOTPAction extends Action {

    static id = 58

    /**
     * Create a new UseOTPAction.
     * @param otp {string} Authentication one-time-password received by the user when they connect to the Minecraft
     * server that generates one-time-passwords.
     * @param context {string} Context in which this OTP is being used. For example, specifies whether this client is
     * trying to use this code to login, link Discord, etc. The server may ignore this value if it's not needed, but it should
     * probably be checked for sanity.
     * @param uuid {string} The user's Minecraft UUID or username that this OTP belongs to. Useful for extra added security,
     * particularly if OTPs exist for a long period of time before expiring.
     */
    constructor (otp?: string, context?: string, uuid?: string) {
        super()
        this.id = 58

        // Don't add payload if the first payload item wasn't provided
        if(otp == undefined) {
            return
        }

        this.addPayload(Buffer.from(otp))
        this.addPayload(Buffer.from(context))
    }
}

export default UseOTPAction
