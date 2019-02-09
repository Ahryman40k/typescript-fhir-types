
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Period } from '../Resource/Period';

        

        /**
         * The regulatory authorization of a medicinal product. 
         */
        export class MedicinalProductAuthorization_Procedure  {

            constructor() {
                this.type = new CodeableConcept();
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
                 * Identifier for this procedure.
                 */
                identifier? : Identifier;
                

                /**
                 * Type of procedure.
                 */
                type : CodeableConcept;
                

                /**
                 * Date of procedure.
                 */
                datePeriod? : Period;
                

                /**
                 * Date of procedure.
                 */
                dateDateTime? : string;
                

                /**
                 * Extensions for dateDateTime
                 */
                _dateDateTime? : Element;
                

                /**
                 * Applcations submitted to obtain a marketing authorization.
                 */
                application? : MedicinalProductAuthorization_Procedure[];
                
        }
        