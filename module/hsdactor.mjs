const fields = foundry.data.fields // Set shortcut to fields

const ProfScoreField = () => new fields.NumberField({required: true, integer: true, min: 0, max : 4, initial: 0}) // Define the number field representing a proficiency score
const StatScoreField = () => new fields.NumberField({required : true, integer : true, min : 1, max : 5, initial : 1}) // Define the number field representing a stat score
const AllegienceScoreField = () => new fields.NumberField({required : true, integer : true, min : 0, initial : 0})

export class HSDPlayer extends foundry.abstract.TypeDataModel {
    static defineSchema(){
        return {
            bio : Biography(),
            proficiency : ProfBlock(),
            stat : statblock(),
            allegience : AllegienceBlock(),
            primarycorp : new fields.StringField({blank : true}),
            secondarycorp : new fields.StringField({blank : true}),
            ledger : new fields.NumberField({required : true, integer : true, min : 0, initial : 0})
        };
    }
}

export class HSDNPC extends foundry.abstract.TypeDataModel {
    static defineSchema(){
        return {
            bio : Biography(),
            proficiency : ProfBlock(),
            stat : statblock()
        }
    }
}

export class HSDMook extends foundry.abstract.TypeDataModel {
    static defineSchema(){
        return {
            bio : Biography(),
            proficiency : ProfBlock(),
            stat : statblock()
        }
    }
}

const ProfBlock = () => new fields.SchemaField({
    science : new fields.SchemaField({
        booksmarts : ProfScoreField(),
        medicine : ProfScoreField(),
        science : ProfScoreField(),
        investigation : ProfScoreField()
    }),
    engineering : new fields.SchemaField({
        computers : ProfScoreField(),
        craft : ProfScoreField(),
        repair : ProfScoreField(),
        robotics : ProfScoreField()
    }),
    combat : new fields.SchemaField({
        cqc : ProfScoreField(),
        rangedcombat : ProfScoreField(),
        security : ProfScoreField(),
        survival : ProfScoreField()
    }),
    communication : new fields.SchemaField({
        coercion : ProfScoreField(),
        command : ProfScoreField(),
        deception : ProfScoreField(),
        express : ProfScoreField(),
        inspire : ProfScoreField(),
        intimidate : ProfScoreField()
    }),
    general : new fields.SchemaField({
        athletics : ProfScoreField(),
        finance : ProfScoreField(),
        fly : ProfScoreField(),
        lockpick : ProfScoreField(),
        navigate : ProfScoreField(),
        operate : ProfScoreField(),
        pilot : ProfScoreField(),
        scent : ProfScoreField(),
        sneak : ProfScoreField(),
        spot : ProfScoreField(),
        streetsmarts : ProfScoreField(),
        swim : ProfScoreField()
    })

})

// Dexterity, Resilience, Acuity, Strength, Presence
const stat = () => new fields.SchemaField({
    dierank : new fields.NumberField({required: true, integer: true, min: 8, max : 12, initial: 8}),
    dexterity : StatScoreField(),
    resilience : StatScoreField(),
    acuity : StatScoreField(),
    strength : StatScoreField(),
    presence : StatScoreField()
})

// Mind, Body, Community, Economy each have their own scores from above
const statblock = () => new fields.SchemaField({
    mind : stat(),
    body : stat(),
    community : stat(),
    economy : stat()
})

const AllegienceBlock = () => new fields.SchemaField({
    marsco : AllegienceScoreField(),
    asr : AllegienceScoreField(),
    pulse : AllegienceScoreField(),
    spyglass : AllegienceScoreField(),
    irpf : AllegienceScoreField(),
    progenitus : AllegienceScoreField(),
    tti : AllegienceScoreField()
})

const Biography = () => new fields.SchemaField({
    charname : new fields.StringField({blank : true}),
    age : new fields.StringField({blank : true}),
    gender : new fields.StringField({blank : true}),
    sex : new fields.StringField({blank : true}),
    height : new fields.StringField({blank : true}),
    eyes : new fields.StringField({blank : true}),
    family : new fields.StringField({blank : true}),
    species : new fields.StringField({blank : true}),
    morphism : new fields.StringField({blank : true}),
    familyperk : new fields.StringField({blank : true}),
    motivation : new fields.StringField({blank : true})
})

const MookBiography = () => ({
    family : new fields.StringField({blank : true}),
    species : new fields.StringField({blank : true}),
    morphism : new fields.StringField({blank : true}),
})