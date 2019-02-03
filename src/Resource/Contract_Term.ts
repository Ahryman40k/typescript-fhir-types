
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Contract_Action } from '../Resource/Contract_Action';
import { Contract_Asset } from '../Resource/Contract_Asset';
import { Contract_Offer } from '../Resource/Contract_Offer';
import { Contract_SecurityLabel } from '../Resource/Contract_SecurityLabel';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Identifier } from '../Resource/Identifier';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract_Term  {

            constructor() {
                this.Offer = new Contract_Offer();
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
                 * Unique identifier for this particular Contract Provision.
                 */
                Identifier? : Identifier;
                

                /**
                 * When this Contract Provision was issued.
                 */
                Issued? : DateTime;
                

                /**
                 * Extensions for issued
                 */
                _issued? : Element;
                

                /**
                 * Relevant time or time-period when this Contract Provision is applicable.
                 */
                Applies? : Period;
                

                /**
                 * The entity that the term applies to.
                 */
                TopicCodeableConcept? : CodeableConcept;
                

                /**
                 * The entity that the term applies to.
                 */
                TopicReference? : Reference;
                

                /**
                 * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
                 */
                Type? : CodeableConcept;
                

                /**
                 * A specialized legal clause or condition based on overarching contract type.
                 */
                SubType? : CodeableConcept;
                

                /**
                 * Statement of a provision in a policy or a contract.
                 */
                Text? : String;
                

                /**
                 * Extensions for text
                 */
                _text? : Element;
                

                /**
                 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
                 */
                SecurityLabel? : Array<Contract_SecurityLabel>;
                

                /**
                 * The matter of concern in the context of this provision of the agrement.
                 */
                Offer : Contract_Offer;
                

                /**
                 * Contract Term Asset List.
                 */
                Asset? : Array<Contract_Asset>;
                

                /**
                 * An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place.
                 */
                Action? : Array<Contract_Action>;
                

                /**
                 * Nested group of Contract Provisions.
                 */
                Group? : Array<Contract_Term>;
                
        }
        