
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Date } from '../Scalar/Date';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Goal_Target } from '../Resource/Goal_Target';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum GoalStatusKind {
                proposed,
accepted,
planned,
inProgress,
onTarget,
aheadOfTarget,
behindTarget,
sustaining,
achieved,
onHold,
cancelled,
enteredInError,
rejected
            }

        /**
         * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. 
         */
        export class Goal  {

            constructor() {
                this.Description = new CodeableConcept();
this.Subject = new Reference();
            }

            
                /**
                 * This is a Goal resource
                 */
                ResourceType: string = 'Goal;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Business identifiers assigned to this goal by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * Indicates whether the goal has been reached and is still considered relevant.
                 */
                Status? : GoalStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Indicates a category the goal falls within.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
                 */
                Priority? : CodeableConcept;
                

                /**
                 * Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
                 */
                Description : CodeableConcept;
                

                /**
                 * Identifies the patient, group or organization for whom the goal is being established.
                 */
                Subject : Reference;
                

                /**
                 * The date or event after which the goal should begin being pursued.
                 */
                StartDate? : String;
                

                /**
                 * Extensions for startDate
                 */
                _startDate? : Element;
                

                /**
                 * The date or event after which the goal should begin being pursued.
                 */
                StartCodeableConcept? : CodeableConcept;
                

                /**
                 * Indicates what should be done by when.
                 */
                Target? : Goal_Target;
                

                /**
                 * Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
                 */
                StatusDate? : Date;
                

                /**
                 * Extensions for statusDate
                 */
                _statusDate? : Element;
                

                /**
                 * Captures the reason for the current status.
                 */
                StatusReason? : String;
                

                /**
                 * Extensions for statusReason
                 */
                _statusReason? : Element;
                

                /**
                 * Indicates whose goal this is - patient goal, practitioner goal, etc.
                 */
                ExpressedBy? : Reference;
                

                /**
                 * The identified conditions and other health record elements that are intended to be addressed by the goal.
                 */
                Addresses? : Array<Reference>;
                

                /**
                 * Any comments related to the goal.
                 */
                Note? : Array<Annotation>;
                

                /**
                 * Identifies the change (or lack of change) at the point when the status of the goal is assessed.
                 */
                OutcomeCode? : Array<CodeableConcept>;
                

                /**
                 * Details of what's changed (or not changed).
                 */
                OutcomeReference? : Array<Reference>;
                
        }
        