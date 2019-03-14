
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
domain: RTTI_CodeableConcept,
classification: RTTI_CodeableConcept,
subtype: t.array(RTTI_CodeableConcept),
source: t.array(RTTI_Reference)
        });
        

        export var RTTI_SubstanceReferenceInformation_Classification:any = t.intersection([mandatory, partial]);
        

export type ISubstanceReferenceInformation_Classification = t.TypeOf<typeof RTTI_SubstanceReferenceInformation_Classification>;
        
        