
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
element: RTTI_Identifier,
source: t.array(RTTI_Reference)
        });
        

        export var RTTI_SubstanceReferenceInformation_GeneElement:any = t.intersection([mandatory, partial]);
        

export type ISubstanceReferenceInformation_GeneElement = t.TypeOf<typeof RTTI_SubstanceReferenceInformation_GeneElement>;
        
        