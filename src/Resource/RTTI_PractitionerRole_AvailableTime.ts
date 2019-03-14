
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
availableStartTime: t.string,
_availableStartTime: RTTI_Element,
availableEndTime: t.string,
_availableEndTime: RTTI_Element
        });
        

        export var RTTI_PractitionerRole_AvailableTime:any = t.intersection([mandatory, partial]);
        

export type IPractitionerRole_AvailableTime = t.TypeOf<typeof RTTI_PractitionerRole_AvailableTime>;
        
        