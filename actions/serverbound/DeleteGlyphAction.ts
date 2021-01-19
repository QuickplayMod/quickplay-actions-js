import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 52
 * Received by the server when the client requests to delete a Glyph. Admins should be able to delete anyone's glyph,
 * but non-admins should only be able to delete their own.
 *
 * Payload Order:
 * UUID of the glyph's owner account
 */
class DeleteGlyphAction extends Action {

    static id = 52

    /**
     * Create a new DeleteGlyphAction.
     * @param uuid UUID of the owner who's glyph should be removed. Admins should be able to delete anyone's glyph,
     * but non-admins should only be able to delete their own.
     */
    constructor (uuid?: string) {
        super()
        this.id = 52

        if(uuid == undefined) {
            return
        }

        this.addPayload(Buffer.from(uuid))
    }
}

export default DeleteGlyphAction
