
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           definition: t.string
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
expression: t.string,
_expression: RTTI_Element
        });
        

        export var RTTI_SearchParameter_Component:any = t.intersection([mandatory, partial]);
        

export type ISearchParameter_Component = t.TypeOf<typeof RTTI_SearchParameter_Component>;
        
        