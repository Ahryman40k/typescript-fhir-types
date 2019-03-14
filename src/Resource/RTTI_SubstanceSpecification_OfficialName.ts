
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
authority: RTTI_CodeableConcept,
status: RTTI_CodeableConcept,
date: t.string,
_date: RTTI_Element
        });
        

        export var RTTI_SubstanceSpecification_OfficialName:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_OfficialName = t.TypeOf<typeof RTTI_SubstanceSpecification_OfficialName>;
        
        