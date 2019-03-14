
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';

import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';

import {RTTI_DataRequirement_CodeFilter} from './RTTI_DataRequirement_CodeFilter';
import {RTTI_DataRequirement_DateFilter} from './RTTI_DataRequirement_DateFilter';
import {RTTI_DataRequirement_Sort} from './RTTI_DataRequirement_Sort';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
type: t.string,
_type: RTTI_Element,
profile: t.array(t.string),
subjectCodeableConcept: RTTI_CodeableConcept,
subjectReference: RTTI_Reference,
mustSupport: t.array(t.string),
_mustSupport: t.array(RTTI_Element),
codeFilter: t.array(RTTI_DataRequirement_CodeFilter),
dateFilter: t.array(RTTI_DataRequirement_DateFilter),
limit: t.number,
_limit: RTTI_Element,
sort: t.array(RTTI_DataRequirement_Sort)
        });
        

        export var RTTI_DataRequirement:any = t.intersection([mandatory, partial]);
        

export type IDataRequirement = t.TypeOf<typeof RTTI_DataRequirement>;
        
        