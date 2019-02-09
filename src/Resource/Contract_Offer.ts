
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Contract_Answer } from '../Resource/Contract_Answer';
import { Contract_Party } from '../Resource/Contract_Party';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Reference } from '../Resource/Reference';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract_Offer  {

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
                 * Unique identifier for this particular Contract Provision.
                 */
                identifier? : Identifier[];
                

                /**
                 * Offer Recipient.
                 */
                party? : Contract_Party[];
                

                /**
                 * The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30).
                 */
                topic? : Reference;
                

                /**
                 * Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit.
                 */
                type? : CodeableConcept;
                

                /**
                 * Type of choice made by accepting party with respect to an offer made by an offeror/ grantee.
                 */
                decision? : CodeableConcept;
                

                /**
                 * How the decision about a Contract was conveyed.
                 */
                decisionMode? : CodeableConcept[];
                

                /**
                 * Response to offer text.
                 */
                answer? : Contract_Answer[];
                

                /**
                 * Human readable form of this Contract Offer.
                 */
                text? : string;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                

                /**
                 * The id of the clause or question text of the offer in the referenced questionnaire/response.
                 */
                linkId? : String[];
                

                /**
                 * Extensions for linkId
                 */
                _linkId? : Element[];
                

                /**
                 * Security labels that protects the offer.
                 */
                securityLabelNumber? : UnsignedInt[];
                

                /**
                 * Extensions for securityLabelNumber
                 */
                _securityLabelNumber? : Element[];
                
        }
        