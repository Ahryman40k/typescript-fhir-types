
        import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';

        

        /**
         * The details of a healthcare service available at a location. 
         */
        export class HealthcareService_NotAvailable  {

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
                 * The reason that can be presented to the user as to why this time is not available.
                 */
                description? : string;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * Service is not available (seasonally or for a public holiday) from this date.
                 */
                during? : Period;
                
        }
        