
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_SubstanceSpecification_OfficialName} from './RTTI_SubstanceSpecification_OfficialName';





        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
type: RTTI_CodeableConcept,
language: t.array(RTTI_CodeableConcept),
domain: t.array(RTTI_CodeableConcept),
jurisdiction: t.array(RTTI_CodeableConcept),
officialName: t.array(RTTI_SubstanceSpecification_OfficialName),
referenceSource: t.array(t.string),
_referenceSource: t.array(RTTI_Element)
        });
        

        export var RTTI_SubstanceSpecification_SubstanceName:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_SubstanceName = t.TypeOf<typeof RTTI_SubstanceSpecification_SubstanceName>;
        
        