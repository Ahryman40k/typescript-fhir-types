
        import { Annotation } from '../Resource/Annotation';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Contract_Subject } from '../Resource/Contract_Subject';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { Timing } from '../Resource/Timing';
import { UnsignedInt } from '../Scalar/UnsignedInt';

        

        /**
         * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. 
         */
        export class Contract_Action  {

            constructor() {
                this.Type = new CodeableConcept();
this.Intent = new CodeableConcept();
this.Status = new CodeableConcept();
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
                 * True if the term prohibits the  action.
                 */
                DoNotPerform? : Boolean;
                

                /**
                 * Extensions for doNotPerform
                 */
                _doNotPerform? : Element;
                

                /**
                 * Activity or service obligation to be done or not done, performed or not performed, effectuated or not by this Contract term.
                 */
                Type : CodeableConcept;
                

                /**
                 * Entity of the action.
                 */
                Subject? : Array<Contract_Subject>;
                

                /**
                 * Reason or purpose for the action stipulated by this Contract Provision.
                 */
                Intent : CodeableConcept;
                

                /**
                 * Id [identifier??] of the clause or question text related to this action in the referenced form or QuestionnaireResponse.
                 */
                LinkId? : Array<String>;
                

                /**
                 * Extensions for linkId
                 */
                _linkId? : Array<Element>;
                

                /**
                 * Current state of the term action.
                 */
                Status : CodeableConcept;
                

                /**
                 * Encounter or Episode with primary association to specified term activity.
                 */
                Context? : Reference;
                

                /**
                 * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
                 */
                ContextLinkId? : Array<String>;
                

                /**
                 * Extensions for contextLinkId
                 */
                _contextLinkId? : Array<Element>;
                

                /**
                 * When action happens.
                 */
                OccurrenceDateTime? : String;
                

                /**
                 * Extensions for occurrenceDateTime
                 */
                _occurrenceDateTime? : Element;
                

                /**
                 * When action happens.
                 */
                OccurrencePeriod? : Period;
                

                /**
                 * When action happens.
                 */
                OccurrenceTiming? : Timing;
                

                /**
                 * Who or what initiated the action and has responsibility for its activation.
                 */
                Requester? : Array<Reference>;
                

                /**
                 * Id [identifier??] of the clause or question text related to the requester of this action in the referenced form or QuestionnaireResponse.
                 */
                RequesterLinkId? : Array<String>;
                

                /**
                 * Extensions for requesterLinkId
                 */
                _requesterLinkId? : Array<Element>;
                

                /**
                 * The type of individual that is desired or required to perform or not perform the action.
                 */
                PerformerType? : Array<CodeableConcept>;
                

                /**
                 * The type of role or competency of an individual desired or required to perform or not perform the action.
                 */
                PerformerRole? : CodeableConcept;
                

                /**
                 * Indicates who or what is being asked to perform (or not perform) the ction.
                 */
                Performer? : Reference;
                

                /**
                 * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
                 */
                PerformerLinkId? : Array<String>;
                

                /**
                 * Extensions for performerLinkId
                 */
                _performerLinkId? : Array<Element>;
                

                /**
                 * Rationale for the action to be performed or not performed. Describes why the action is permitted or prohibited.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * Indicates another resource whose existence justifies permitting or not permitting this action.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * Describes why the action is to be performed or not performed in textual form.
                 */
                Reason? : Array<String>;
                

                /**
                 * Extensions for reason
                 */
                _reason? : Array<Element>;
                

                /**
                 * Id [identifier??] of the clause or question text related to the reason type or reference of this  action in the referenced form or QuestionnaireResponse.
                 */
                ReasonLinkId? : Array<String>;
                

                /**
                 * Extensions for reasonLinkId
                 */
                _reasonLinkId? : Array<Element>;
                

                /**
                 * Comments made about the term action made by the requester, performer, subject or other participants.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * Security labels that protects the action.
                 */
                SecurityLabelNumber? : Array<UnsignedInt>;
                

                /**
                 * Extensions for securityLabelNumber
                 */
                _securityLabelNumber? : Array<Element>;
                
        }
        