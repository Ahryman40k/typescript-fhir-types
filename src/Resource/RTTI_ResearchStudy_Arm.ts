
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
type: RTTI_CodeableConcept,
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_ResearchStudy_Arm:any = t.intersection([mandatory, partial]);
        

export type IResearchStudy_Arm = t.TypeOf<typeof RTTI_ResearchStudy_Arm>;
        
        