
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Narrative} from './RTTI_Narrative';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
title: t.string,
_title: RTTI_Element,
code: RTTI_CodeableConcept,
author: t.array(RTTI_Reference),
text: RTTI_Narrative,
mode: t.string,
_mode: RTTI_Element,
orderedBy: RTTI_CodeableConcept,
entry: t.array(RTTI_Reference),
emptyReason: RTTI_CodeableConcept,
section: t.array(RTTI_Composition_Section)
        });
        

        export var RTTI_Composition_Section:any = t.intersection([mandatory, partial]);
        

export type IComposition_Section = t.TypeOf<typeof RTTI_Composition_Section>;
        
        