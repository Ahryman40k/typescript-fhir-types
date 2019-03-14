
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
identifier: t.array(RTTI_Identifier),
period: RTTI_Period,
issuer: RTTI_Reference
        });
        

        export var RTTI_Practitioner_Qualification:any = t.intersection([mandatory, partial]);
        

export type IPractitioner_Qualification = t.TypeOf<typeof RTTI_Practitioner_Qualification>;
        
        