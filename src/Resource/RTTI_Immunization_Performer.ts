
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           actor: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
function: RTTI_CodeableConcept
        });
        

        export var RTTI_Immunization_Performer:any = t.intersection([mandatory, partial]);
        

export type IImmunization_Performer = t.TypeOf<typeof RTTI_Immunization_Performer>;
        
        