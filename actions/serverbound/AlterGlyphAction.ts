import Action from '../Action'
import {Buffer} from 'buffer'

/**
 * ID: 46
 * Received by the server when the client requests to modify their Quickplay glyph.
 * Should be restricted to Premium users.
 *
 * Payload Order:
 * Glyph JSON
 */
class AlterGlyphAction extends Action {

    static id = 46

    /**
     * Create a new AlterGlyphAction.
     * @param newGlyph {Glyph} The new Glyph for the user. Should not replace values which are undefined.
     */
    constructor (newGlyph?: Glyph) {
        super()
        this.id = 46

        if(newGlyph == undefined) {
            return
        }

        this.addPayload(Buffer.from(JSON.stringify(newGlyph)))
    }
}

export default AlterGlyphAction
