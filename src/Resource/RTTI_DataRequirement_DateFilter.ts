
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';
import {RTTI_Period} from './RTTI_Period';
import {RTTI_Duration} from './RTTI_Duration';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
path: t.string,
_path: RTTI_Element,
searchParam: t.string,
_searchParam: RTTI_Element,
valueDateTime: t.string,
_valueDateTime: RTTI_Element,
valuePeriod: RTTI_Period,
valueDuration: RTTI_Duration
        });
        

        export var RTTI_DataRequirement_DateFilter:any = t.intersection([mandatory, partial]);
        

export type IDataRequirement_DateFilter = t.TypeOf<typeof RTTI_DataRequirement_DateFilter>;
        
        