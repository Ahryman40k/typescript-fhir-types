
import * as t from 'io-ts';
import { RTTI_Extension } from './RTTI_Extension';
import { RTTI_Coding } from './RTTI_Coding';
import { RTTI_Element } from './RTTI_Element';




const mandatory = t.type({

});


const partial = t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        coding: t.array(RTTI_Coding),
        text: t.string,
        _text: RTTI_Element
});


export var RTTI_CodeableConcept:any = t.intersection([mandatory, partial]);


export type ICodeableConcept = t.TypeOf<typeof RTTI_CodeableConcept>;

