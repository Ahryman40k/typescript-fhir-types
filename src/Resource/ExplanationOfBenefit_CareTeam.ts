
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { PositiveInt } from '../Scalar/PositiveInt';
import { Reference } from '../Resource/Reference';

        

        /**
         * This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. 
         */
        export class ExplanationOfBenefit_CareTeam  {

            constructor() {
                this.provider = new Reference();
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
                 * Sequence of careteam which serves to order and provide a link.
                 */
                sequence? : PositiveInt;
                

                /**
                 * Extensions for sequence
                 */
                _sequence? : Element;
                

                /**
                 * The members of the team who provided the overall service.
                 */
                provider : Reference;
                

                /**
                 * The practitioner who is billing and responsible for the claimed services rendered to the patient.
                 */
                responsible? : boolean;
                

                /**
                 * Extensions for responsible
                 */
                _responsible? : Element;
                

                /**
                 * The lead, assisting or supervising practitioner and their discipline if a multidisiplinary team.
                 */
                role? : CodeableConcept;
                

                /**
                 * The qualification which is applicable for this service.
                 */
                qualification? : CodeableConcept;
                
        }
        