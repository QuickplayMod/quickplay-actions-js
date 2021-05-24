import Action from '../Action'
import {Buffer} from 'buffer'

const IdentifierTypes = Object.freeze({
    GOOGLE: 'GOOGLE',
    MOJANG: 'MOJANG',
    ANONYMOUS: 'ANONYMOUS'
})

/**
 * ID: 25
 * Received by the server when the client first initializes the socket. Intended to send client metadata.
 *
 * As an attempt to make porting Quickplay to other clients as easy as possible, only the first four payload items
 * are required. If you are a third party implementing Quickplay into your client, the other items may not be
 * relevant to your client, or your implementation or legal obligations may vary, rendering them difficult or
 * impossible to include. Additionally, they are not relevant to the Quickplay backend, but instead are used
 * to target a better user experience, debug issues, and gather user analytics.
 *
 * On the other hand, the client ID, user agent, Quickplay version, and Minecraft language ARE required. The
 * Quickplay backend uses these items to determine what actions to send to the user, and what those actions should
 * contain in their payload. If these items are not included, the socket connection will be disconnected. If they are
 * not accurate, the user could receive actions which they should not receive, which could result in incorrect
 * buttons/translations or, at worst, client crashes/errors.
 *
 * If a client ID is not relevant to your client (e.g. your client only supports anonymous mode), submit an empty
 * string. If you are not sure what your Quickplay user agent should be, it does not matter as long as you are
 * confident that it is unique to your client. If you are not sure what your Quickplay version should be, use the
 * version of Quickplay from which you are porting. If this is not relevant (e.g. you are developing a web portal), you
 * can tell the backend to ignore this by proving an empty value. If a Minecraft language is not relevant to your
 * client, use the default language of your client or "en_us".
 *
 * Payload Order:
 * Identifier - This is the unique identifier of this user, such as their UUID in Minecraft or their email in the browser.
 *      Should be an empty string if identifier type == ANONYMOUS
 * Identifier type (GOOGLE or MOJANG or ANONYMOUS)
 * User agent - This is the name of the client which the user is using.
 * Quickplay version
 * Minecraft language
 * Minecraft version
 * Client version - This is the version of the user agent, e.g. for Forge, it'd be the Forge version.
 */
class InitializeClientAction extends Action {

    static id = 25

    /**
     * Create a new InitializeClientAction.
     * @param id {string} Identifier for this client.
     * @param idType {string} Type of ID used
     * @param userAgent {string} User agent this client is using
     * @param qpVersion {string} Version of Quickplay being used
     * @param lang {string} Language used by the user
     * @param mcVersion {string} Minecraft version being used, if applicable. Optional.
     * @param clientVersion {string} Version of client being used, if applicable. Optional.
     */
    constructor (id?: string, idType?: string, userAgent?: string, qpVersion?: string, lang?: string, mcVersion?: string,
                 clientVersion?: string) {
        super()
        this.id = 25

        // Don't add payload if the first payload item wasn't provided
        if(id == undefined) {
            return
        }

        this.addPayload(Buffer.from(id))
        this.addPayload(Buffer.from(idType))
        this.addPayload(Buffer.from(userAgent))
        this.addPayload(Buffer.from(qpVersion))
        this.addPayload(Buffer.from(lang))

        if(mcVersion == null) {
            mcVersion = ''
        }
        if(clientVersion == null) {
            clientVersion = ''
        }

        this.addPayload(Buffer.from(mcVersion))
        this.addPayload(Buffer.from(clientVersion))
    }
}

export default InitializeClientAction
export {IdentifierTypes}
