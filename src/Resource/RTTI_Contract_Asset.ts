
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Contract_Context} from './RTTI_Contract_Context';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';

import {RTTI_Contract_Answer} from './RTTI_Contract_Answer';

import {RTTI_Contract_ValuedItem} from './RTTI_Contract_ValuedItem';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
scope: RTTI_CodeableConcept,
type: t.array(RTTI_CodeableConcept),
typeReference: t.array(RTTI_Reference),
subtype: t.array(RTTI_CodeableConcept),
relationship: RTTI_Coding,
context: t.array(RTTI_Contract_Context),
condition: t.string,
_condition: RTTI_Element,
periodType: t.array(RTTI_CodeableConcept),
period: t.array(RTTI_Period),
usePeriod: t.array(RTTI_Period),
text: t.string,
_text: RTTI_Element,
linkId: t.array(t.string),
_linkId: t.array(RTTI_Element),
answer: t.array(RTTI_Contract_Answer),
securityLabelNumber: t.array(t.number),
_securityLabelNumber: t.array(RTTI_Element),
valuedItem: t.array(RTTI_Contract_ValuedItem)
        });
        

        export var RTTI_Contract_Asset:any = t.intersection([mandatory, partial]);
        

export type IContract_Asset = t.TypeOf<typeof RTTI_Contract_Asset>;
        
        