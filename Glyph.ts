
class Glyph {
    /**
     * UUID of the owner
     */
    uuid;
    /**
     * URL to the glyph image
     */
    path;
    /**
     * Height of the glyph
     */
    height = 20.0;
    /**
     * Vertical offset from the default position that the glyph should be rendered at
     */
    yOffset = 0.0;
    /**
     * Whether this glyph should be displayed in-game
     */
    displayInGames = false;
}

export default Glyph
