
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
geneSequenceOrigin: RTTI_CodeableConcept,
gene: RTTI_CodeableConcept,
source: t.array(RTTI_Reference)
        });
        

        export var RTTI_SubstanceReferenceInformation_Gene:any = t.intersection([mandatory, partial]);
        

export type ISubstanceReferenceInformation_Gene = t.TypeOf<typeof RTTI_SubstanceReferenceInformation_Gene>;
        
        