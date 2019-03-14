
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           information: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
sequence: t.number,
_sequence: RTTI_Element,
appliesToAll: t.boolean,
_appliesToAll: RTTI_Element
        });
        

        export var RTTI_CoverageEligibilityRequest_SupportingInformation:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityRequest_SupportingInformation = t.TypeOf<typeof RTTI_CoverageEligibilityRequest_SupportingInformation>;
        
        