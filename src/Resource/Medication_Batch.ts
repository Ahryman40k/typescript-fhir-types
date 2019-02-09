
        import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';

        

        /**
         * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. 
         */
        export class Medication_Batch  {

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
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The assigned lot number of a batch of the specified product.
                 */
                lotNumber? : string;
                

                /**
                 * Extensions for lotNumber
                 */
                _lotNumber? : Element;
                

                /**
                 * When this specific batch of product will expire.
                 */
                expirationDate? : DateTime;
                

                /**
                 * Extensions for expirationDate
                 */
                _expirationDate? : Element;
                

                /**
                 * An identifier assigned to a drug at the point of manufacturing and repackaging (at the package or pallet level), sufficient to facilitate the identification, validation, authentication, and tracking and tracking of drugs.
                 */
                serialNumber? : string;
                

                /**
                 * Extensions for serialNumber
                 */
                _serialNumber? : Element;
                
        }
        