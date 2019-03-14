
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Attachment} from './RTTI_Attachment';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
representation: t.string,
_representation: RTTI_Element,
attachment: RTTI_Attachment
        });
        

        export var RTTI_SubstanceSpecification_StructuralRepresentation:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_StructuralRepresentation = t.TypeOf<typeof RTTI_SubstanceSpecification_StructuralRepresentation>;
        
        