import Action from '../Action'
import Glyph from "../../Glyph";
import {Buffer} from 'buffer'

/**
 * ID: 46
 * Received by the server when the client requests to modify a Quickplay glyph. Admins should be able to modify
 * any glyph, but non-admins should only be able to modify their own glyph, assuming they're Premium.
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
