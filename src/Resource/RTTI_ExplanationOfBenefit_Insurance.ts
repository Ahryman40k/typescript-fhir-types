
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           coverage: RTTI_Reference
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
focal: t.boolean,
_focal: RTTI_Element
        });
        

        export var RTTI_ExplanationOfBenefit_Insurance:any = t.intersection([mandatory, partial]);
        

export type IExplanationOfBenefit_Insurance = t.TypeOf<typeof RTTI_ExplanationOfBenefit_Insurance>;
        
        