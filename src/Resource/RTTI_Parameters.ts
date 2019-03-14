
import * as t from 'io-ts';
import {RTTI_Meta} from './RTTI_Meta';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Parameters_Parameter} from './RTTI_Parameters_Parameter';




        const mandatory = t.type({
           resourceType: t.string
        });
        

        const partial = t.partial({
            id: t.string,
meta: RTTI_Meta,
implicitRules: t.string,
_implicitRules: RTTI_Element,
language: t.string,
_language: RTTI_Element,
parameter: t.array(RTTI_Parameters_Parameter)
        });
        

        export var RTTI_Parameters:any = t.intersection([mandatory, partial]);
        

export type IParameters = t.TypeOf<typeof RTTI_Parameters>;
        
        