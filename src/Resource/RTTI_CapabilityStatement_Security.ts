
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
cors: t.boolean,
_cors: RTTI_Element,
service: t.array(RTTI_CodeableConcept),
description: t.string,
_description: RTTI_Element
        });
        

        export var RTTI_CapabilityStatement_Security:any = t.intersection([mandatory, partial]);
        

export type ICapabilityStatement_Security = t.TypeOf<typeof RTTI_CapabilityStatement_Security>;
        
        