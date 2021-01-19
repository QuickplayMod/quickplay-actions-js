import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 53
 * Remove a specified user's glyph from the stored list of glyphs.
 *
 * Payload Order:
 * UUID
 */
class RemoveGlyphAction extends Action {

    static id = 53

    /**
     * Create a new RemoveGlyphAction.
     * @param uuid {string} UUID of the account whose glyph should be removed.
     */
    constructor (uuid?: string) {
        super()
        this.id = 53

        // Don't add payload if the first payload item wasn't provided
        if(uuid == undefined) {
            return
        }

        this.addPayload(Buffer.from(uuid))
    }
}

export default RemoveGlyphAction
