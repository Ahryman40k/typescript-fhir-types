
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';

import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
daysOfWeek: t.array(t.string),
_daysOfWeek: t.array(RTTI_Element),
allDay: t.boolean,
_allDay: RTTI_Element,
openingTime: t.string,
_openingTime: RTTI_Element,
closingTime: t.string,
_closingTime: RTTI_Element
        });
        

        export var RTTI_Location_HoursOfOperation:any = t.intersection([mandatory, partial]);
        

export type ILocation_HoursOfOperation = t.TypeOf<typeof RTTI_Location_HoursOfOperation>;
        
        