import {HSDPlayer, HSDNPC, HSDMook} from "./hsdactor.mjs";
import {HSDPlayerSheet} from "./hsdplayersheet.mjs";

const Actors = foundry.documents.collections.Actors;
const ActorSheet = foundry.appv1.sheets.ActorSheet;

Hooks.once("init", function(){
    console.log("Hc Svnt Dracones | System Initialization Call");
    CONFIG.Actor.dataModels.player = HSDPlayer;
    CONFIG.Actor.dataModels.npc = HSDNPC;
    CONFIG.Actor.dataModels.mook = HSDMook;
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("HSD", HSDPlayerSheet, {
        types: ["player"],
        makeDefault: true
    });
    Actors.registerSheet("HSD", HSDPlayerSheet, {
        types: ["npc"],
        makeDefault: false
    });
});