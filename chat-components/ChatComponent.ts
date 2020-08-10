import ChatFormatting from './ChatFormatting'
import ClickEvent from './ClickEvent'
import HoverEvent from './HoverEvent'

/**
 * JavaScript implementation of Minecraft's ChatComponent. Can be serialized to JSON and deserialized by the client.
 */
class ChatComponent {

    /**
     * Text of the chat component.
     */
    text = ''
    /**
     * Color of the chat component.
     * @see ChatFormatting
     */
    color: string
    /**
     * ClickEvent when this chat component is clicked.
     * @see ClickEvent
     */
    clickEvent: ClickEvent
    /**
     * HoverEvent when this chat component is hovered over.
     * @see HoverEvent
     */
    hoverEvent: HoverEvent
    /**
     * Whether this chat component's text is italicized.
     */
    italic: boolean
    /**
     * Whether this chat component's text is obfuscated.
     */
    obfuscated: boolean
    /**
     * Whether this chat component's text is bolded.
     */
    bold: boolean
    /**
     * Whether this chat component's text is underlined.
     */
    underline: boolean
    /**
     * Whether this chat component's text is striked through.
     */
    strikethrough: boolean
    /**
     * Extra chat components to be appended to this ChatComponent.
     */
    extra: ChatComponent[]

    constructor(text: string) {
        this.setColor(ChatFormatting.white)
        this.text = text
    }

    /**
     * Setter for {@link color}
     * @see ChatFormatting
     * @param color {string} Color to set to. Should be an item in {@link ChatFormatting}
     */
    setColor(color: string): ChatComponent {
        for(const loopColor in ChatFormatting) {
            if (ChatFormatting.hasOwnProperty(loopColor) && ChatFormatting[loopColor] === color) {
                this.color = loopColor
                return this
            }
        }

        throw new Error('Invalid color! Must be property of ChatFormatting.')
    }

    /**
     * Setter for {@link clickEvent}
     * @see ClickEvent
     * @param clickEvent {ClickEvent} new ClickEvent
     */
    setClickEvent(clickEvent: ClickEvent): ChatComponent {
        if(clickEvent instanceof ClickEvent) {
            this.clickEvent = clickEvent
            return this
        } else {
            throw new Error('Invalid clickEvent! Must be of type ClickEvent.')
        }
    }

    /**
     * Setter for {@link hoverEvent}
     * @see HoverEvent
     * @param hoverEvent {HoverEvent} new HoverEvent
     */
    setHoverEvent(hoverEvent: HoverEvent): ChatComponent {
        if(hoverEvent instanceof HoverEvent) {
            this.hoverEvent = hoverEvent
            return this
        } else {
            throw new Error('Invalid hoverEvent! Must be of type HoverEvent.')
        }
    }

    /**
     * Setter for {@link italic}
     * @param bool {boolean} new italic status
     */
    setItalic(bool: boolean): ChatComponent {
        this.italic = !!bool
        return this
    }

    /**
     * Setter for {@link obfuscated}
     * @param bool {boolean} new obfuscated status
     */
    setObfuscated(bool: boolean): ChatComponent {
        this.obfuscated = !!bool
        return this
    }

    /**
     * Setter for {@link strikethrough}
     * @param bool {boolean} new strikethrough status
     */
    setStrikethrough(bool: boolean): ChatComponent {
        this.strikethrough = !!bool
        return this
    }

    /**
     * Setter for {@link bold}
     * @param bool {boolean} new bold status
     */
    setBold(bool: boolean): ChatComponent {
        this.bold = !!bool
        return this
    }

    /**
     * Setter for {@link underline}
     * @param bool {boolean} new underline status
     */
    setUnderline(bool: boolean): ChatComponent {
        this.underline = !!bool
        return this
    }

    /**
     * Append a new ChatComponent to this chat component.
     * @param sibling {ChatComponent} Component to append.
     */
    appendSibling(sibling: ChatComponent): ChatComponent {
        if(!Array.isArray(this.extra)) {
            this.extra = []
        }

        this.extra.push(sibling)
        return this
    }

    /**
     * Append text to this chat component.
     * @param text {string} Text to append.
     */
    appendText(text: string): ChatComponent {
        this.text += text
        return this
    }
}

export default ChatComponent
