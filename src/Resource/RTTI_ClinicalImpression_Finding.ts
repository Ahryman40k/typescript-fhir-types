
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
itemCodeableConcept: RTTI_CodeableConcept,
itemReference: RTTI_Reference,
basis: t.string,
_basis: RTTI_Element
        });
        

        export var RTTI_ClinicalImpression_Finding:any = t.intersection([mandatory, partial]);
        

export type IClinicalImpression_Finding = t.TypeOf<typeof RTTI_ClinicalImpression_Finding>;
        
        