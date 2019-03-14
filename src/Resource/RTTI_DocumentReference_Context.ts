
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Period} from './RTTI_Period';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
encounter: t.array(RTTI_Reference),
event: t.array(RTTI_CodeableConcept),
period: RTTI_Period,
facilityType: RTTI_CodeableConcept,
practiceSetting: RTTI_CodeableConcept,
sourcePatientInfo: RTTI_Reference,
related: t.array(RTTI_Reference)
        });
        

        export var RTTI_DocumentReference_Context:any = t.intersection([mandatory, partial]);
        

export type IDocumentReference_Context = t.TypeOf<typeof RTTI_DocumentReference_Context>;
        
        