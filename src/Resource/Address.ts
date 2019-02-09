
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';

        export enum AddressUseKind {
                home,
work,
temp,
old,
billing
            }
export enum AddressTypeKind {
                postal,
physical,
both
            }

        /**
         * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world. 
         */
        export class Address  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * The purpose of this address.
                 */
                use? : AddressUseKind;
                

                /**
                 * Extensions for use
                 */
                _use? : Element;
                

                /**
                 * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes and care-of addresses). Most addresses are both.
                 */
                type? : AddressTypeKind;
                

                /**
                 * Extensions for type
                 */
                _type? : Element;
                

                /**
                 * Specifies the entire address as it should be displayed e.g. on a postal label. This may be provided instead of or as well as the specific parts.
                 */
                text? : string;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                

                /**
                 * This component contains the house number, apartment number, street name, street direction,  P.O. Box number, delivery hints, and similar address information.
                 */
                line? : String[];
                

                /**
                 * Extensions for line
                 */
                _line? : Element[];
                

                /**
                 * The name of the city, town, suburb, village or other community or delivery center.
                 */
                city? : string;
                

                /**
                 * Extensions for city
                 */
                _city? : Element;
                

                /**
                 * The name of the administrative area (county).
                 */
                district? : string;
                

                /**
                 * Extensions for district
                 */
                _district? : Element;
                

                /**
                 * Sub-unit of a country with limited sovereignty in a federally organized country. A code may be used if codes are in common use (e.g. US 2 letter state codes).
                 */
                state? : string;
                

                /**
                 * Extensions for state
                 */
                _state? : Element;
                

                /**
                 * A postal code designating a region defined by the postal service.
                 */
                postalCode? : string;
                

                /**
                 * Extensions for postalCode
                 */
                _postalCode? : Element;
                

                /**
                 * Country - a nation as commonly understood or generally accepted.
                 */
                country? : string;
                

                /**
                 * Extensions for country
                 */
                _country? : Element;
                

                /**
                 * Time period when address was/is in use.
                 */
                period? : Period;
                
        }
        