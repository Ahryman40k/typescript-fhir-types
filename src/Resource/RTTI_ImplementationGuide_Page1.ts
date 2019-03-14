
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';





        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
name: t.string,
_name: RTTI_Element,
title: t.string,
_title: RTTI_Element,
anchor: t.array(t.string),
_anchor: t.array(RTTI_Element)
        });
        

        export var RTTI_ImplementationGuide_Page1:any = t.intersection([mandatory, partial]);
        

export type IImplementationGuide_Page1 = t.TypeOf<typeof RTTI_ImplementationGuide_Page1>;
        
        