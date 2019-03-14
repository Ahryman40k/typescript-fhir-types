
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
software: t.string,
_software: RTTI_Element,
version: t.string,
_version: RTTI_Element,
contact: RTTI_ContactPoint,
endpoint: t.string,
_endpoint: RTTI_Element
        });
        

        export var RTTI_MessageHeader_Source:any = t.intersection([mandatory, partial]);
        

export type IMessageHeader_Source = t.TypeOf<typeof RTTI_MessageHeader_Source>;
        
        