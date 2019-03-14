
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Narrative} from './RTTI_Narrative';
import {ResourceList} from '../Union/ResourceList';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_MessageHeader_Destination} from './RTTI_MessageHeader_Destination';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_MessageHeader_Source} from './RTTI_MessageHeader_Source';
import {RTTI_CodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MessageHeader_Response} from './RTTI_MessageHeader_Response';




        const mandatory = t.type({
           resourceType: t.string,
source: RTTI_MessageHeader_Source
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
text: RTTI_Narrative,
contained: t.array(ResourceList),
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
eventCoding: RTTI_Coding,
eventUri: t.string,
_eventUri: RTTI_Element,
destination: t.array(RTTI_MessageHeader_Destination),
sender: RTTI_Reference,
enterer: RTTI_Reference,
author: RTTI_Reference,
responsible: RTTI_Reference,
reason: RTTI_CodeableConcept,
response: RTTI_MessageHeader_Response,
focus: t.array(RTTI_Reference),
definition: t.string
        });
        

        export var RTTI_MessageHeader:any = t.intersection([mandatory, partial]);
        

export type IMessageHeader = t.TypeOf<typeof RTTI_MessageHeader>;
        
        