
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           therapyRelationshipType: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
medicationCodeableConcept: RTTI_CodeableConcept,
medicationReference: RTTI_Reference
        });
        

        export var RTTI_MedicinalProductClinicals_OtherTherapy:any = t.intersection([mandatory, partial]);
        

export type IMedicinalProductClinicals_OtherTherapy = t.TypeOf<typeof RTTI_MedicinalProductClinicals_OtherTherapy>;
        
        