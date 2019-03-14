
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           code: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
item: t.array(RTTI_Reference)
        });
        

        export var RTTI_ClinicalImpression_Investigation:any = t.intersection([mandatory, partial]);
        

export type IClinicalImpression_Investigation = t.TypeOf<typeof RTTI_ClinicalImpression_Investigation>;
        
        