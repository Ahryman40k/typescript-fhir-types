
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_CoverageEligibilityResponse_Item} from './RTTI_CoverageEligibilityResponse_Item';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
coverage: RTTI_Reference,
contract: RTTI_Reference,
inforce: t.boolean,
_inforce: RTTI_Element,
item: t.array(RTTI_CoverageEligibilityResponse_Item)
        });
        

        export var RTTI_CoverageEligibilityResponse_Insurance:any = t.intersection([mandatory, partial]);
        

export type ICoverageEligibilityResponse_Insurance = t.TypeOf<typeof RTTI_CoverageEligibilityResponse_Insurance>;
        
        