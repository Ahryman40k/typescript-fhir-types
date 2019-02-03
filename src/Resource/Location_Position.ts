
        import { Decimal } from '../Scalar/Decimal';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        

        /**
         * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. 
         */
        export class Location_Position  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                Id? : String;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below).
                 */
                Longitude? : Decimal;
                

                /**
                 * Extensions for longitude
                 */
                _longitude? : Element;
                

                /**
                 * Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below).
                 */
                Latitude? : Decimal;
                

                /**
                 * Extensions for latitude
                 */
                _latitude? : Element;
                

                /**
                 * Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below).
                 */
                Altitude? : Decimal;
                

                /**
                 * Extensions for altitude
                 */
                _altitude? : Element;
                
        }
        