
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Money } from '../Resource/Money';

        

        /**
         * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. 
         */
        export class CoverageEligibilityResponse_Benefit  {

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
                 * Deductible, visits, benefit amount.
                 */
                type : CodeableConcept;
                

                /**
                 * Benefits allowed.
                 */
                allowedUnsignedInt? : number;
                

                /**
                 * Extensions for allowedUnsignedInt
                 */
                _allowedUnsignedInt? : Element;
                

                /**
                 * Benefits allowed.
                 */
                allowedString? : string;
                

                /**
                 * Extensions for allowedString
                 */
                _allowedString? : Element;
                

                /**
                 * Benefits allowed.
                 */
                allowedMoney? : Money;
                

                /**
                 * Benefits used.
                 */
                usedUnsignedInt? : number;
                

                /**
                 * Extensions for usedUnsignedInt
                 */
                _usedUnsignedInt? : Element;
                

                /**
                 * Benefits used.
                 */
                usedMoney? : Money;
                
        }
        