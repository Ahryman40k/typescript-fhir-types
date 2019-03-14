
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Identifier} from './RTTI_Identifier';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
type: RTTI_CodeableConcept,
name: RTTI_CodeableConcept,
parameters: t.string,
_parameters: RTTI_Element,
substanceId: RTTI_Identifier,
substanceName: t.string,
_substanceName: RTTI_Element,
amount: t.string,
_amount: RTTI_Element
        });
        

        export var RTTI_SubstanceSpecification_Property:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_Property = t.TypeOf<typeof RTTI_SubstanceSpecification_Property>;
        
        