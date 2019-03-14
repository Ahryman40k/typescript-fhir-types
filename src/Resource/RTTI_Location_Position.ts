
import * as t from 'io-ts';
import {RTTI_Extension} from './RTTI_Extension';
import {RTTI_Element} from './RTTI_Element';




        const mandatory = t.type({
           
        });
        

        const partial = t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
longitude: t.number,
_longitude: RTTI_Element,
latitude: t.number,
_latitude: RTTI_Element,
altitude: t.number,
_altitude: RTTI_Element
        });
        

        export var RTTI_Location_Position:any = t.intersection([mandatory, partial]);
        

export type ILocation_Position = t.TypeOf<typeof RTTI_Location_Position>;
        
        