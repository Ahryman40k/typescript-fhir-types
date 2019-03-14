
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           role: RTTI_CodeableConcept,
reference: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension)
        });
        

        export var RTTI_Consent_Actor:any = t.intersection([mandatory, partial]);
        

export type IConsent_Actor = t.TypeOf<typeof RTTI_Consent_Actor>;
        
        