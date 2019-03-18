
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface ILocation_Position {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
                     */
                    longitude? : number;
                    

                    /**
                     * Extensions for longitude
                     */
                    _longitude? : IElement;
                    

                    /**
                     * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
                     */
                    latitude? : number;
                    

                    /**
                     * Extensions for latitude
                     */
                    _latitude? : IElement;
                    

                    /**
                     * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
                     */
                    altitude? : number;
                    

                    /**
                     * Extensions for altitude
                     */
                    _altitude? : IElement;
                    
            }
        


        export const RTTI_Location_Position: t.Type<ILocation_Position> = t.recursion( 'ILocation_Position', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
longitude: t.number,
_longitude: RTTI_Element,
latitude: t.number,
_latitude: RTTI_Element,
altitude: t.number,
_altitude: RTTI_Element
        })
        
        );
        

        