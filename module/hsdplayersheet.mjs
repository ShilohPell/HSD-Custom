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
    async getData() {
        const data = await super.getData();
        // Add any extra data processing here if needed
        return data;
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);
        // Add custom event listeners here if needed
    }
}