
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Reference} from './RTTI_Reference';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
description: t.string,
_description: RTTI_Element,
url: t.string,
_url: RTTI_Element,
custodian: RTTI_Reference
        });
        

        export var RTTI_CapabilityStatement_Implementation:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Implementation = t.TypeOf<typeof RTTI_CapabilityStatement_Implementation>;
        
        