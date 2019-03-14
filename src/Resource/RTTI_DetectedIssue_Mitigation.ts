
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           action: RTTI_CodeableConcept
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
date: t.string,
_date: RTTI_Element,
author: RTTI_Reference
        });
        

        export var RTTI_DetectedIssue_Mitigation:any = t.intersection([mandatory, partial]);
        

export type IDetectedIssue_Mitigation = t.TypeOf<typeof RTTI_DetectedIssue_Mitigation>;
        
        