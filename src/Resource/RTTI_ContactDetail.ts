
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_ContactPoint} from './RTTI_ContactPoint';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
telecom: t.array(RTTI_ContactPoint)
        });
        

        export var RTTI_ContactDetail:any = t.intersection([mandatory, partial]);
        

export type IContactDetail = t.TypeOf<typeof RTTI_ContactDetail>;
        
        