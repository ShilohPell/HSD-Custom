const ActorSheet = foundry.applications.sheets.ActorSheetV2;
const HAM = foundry.applications.api.HandlebarsApplicationMixin

export class HSDPlayerSheet extends HAM(ActorSheet) {
    /** @override */
    static DEFAULT_OPTIONS = {
        
            classes: ["HSD", "actor", "pc", "char-sheet"],
            position:{
                width: 1200,
                height: 900
            }
    }
    static PARTS = {
        form: {
            template: "systems/HSD/templates/actor-sheet-pc.hbs"
        }
    }

    /** @override */
    async _prepareContext(options) {
        const context = await super._prepareContext(options);
        // Add any extra data processing here if needed
        return context;
    }

    /** @override */
    _onRender(context, options) {
         this.element.querySelector("input[name=something]").addEventListener("click", /* ... */);
        // We will deal with reset later
    }
}