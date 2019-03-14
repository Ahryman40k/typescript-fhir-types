
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';




        const mandatory = t.type({
           identifier: RTTI_Identifier,
sopClass: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.number,
_number: RTTI_Element,
title: t.string,
_title: RTTI_Element
        });
        

        export var RTTI_ImagingStudy_Instance:any = t.intersection([mandatory, partial]);
        

export type IImagingStudy_Instance = t.TypeOf<typeof RTTI_ImagingStudy_Instance>;
        
        