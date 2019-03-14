
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
code: RTTI_CodeableConcept,
status: RTTI_CodeableConcept,
statusDate: t.string,
_statusDate: RTTI_Element,
comment: t.string,
_comment: RTTI_Element,
referenceSource: t.array(t.string),
_referenceSource: t.array(RTTI_Element)
        });
        

        export var RTTI_SubstanceSpecification_SubstanceCode:any = t.intersection([mandatory, partial]);
        

export type ISubstanceSpecification_SubstanceCode = t.TypeOf<typeof RTTI_SubstanceSpecification_SubstanceCode>;
        
        