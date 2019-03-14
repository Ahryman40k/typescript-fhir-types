
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Identifier} from './RTTI_Identifier';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Coding} from './RTTI_Coding';
import {RTTI_Reference} from './RTTI_Reference';
import {RTTI_ImagingStudy_Performer} from './RTTI_ImagingStudy_Performer';
import {RTTI_ImagingStudy_Instance} from './RTTI_ImagingStudy_Instance';




        const mandatory = t.type({
           identifier: RTTI_Identifier,
modality: RTTI_Coding
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
number: t.number,
_number: RTTI_Element,
description: t.string,
_description: RTTI_Element,
numberOfInstances: t.number,
_numberOfInstances: RTTI_Element,
endpoint: t.array(RTTI_Reference),
bodySite: RTTI_Coding,
laterality: RTTI_Coding,
specimen: t.array(RTTI_Reference),
started: t.string,
_started: RTTI_Element,
performer: t.array(RTTI_ImagingStudy_Performer),
instance: t.array(RTTI_ImagingStudy_Instance)
        });
        

        export var RTTI_ImagingStudy_Series:any = t.intersection([mandatory, partial]);
        

export type IImagingStudy_Series = t.TypeOf<typeof RTTI_ImagingStudy_Series>;
        
        