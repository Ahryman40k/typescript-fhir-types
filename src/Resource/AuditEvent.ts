
        import { AuditEvent_Agent } from '../Resource/AuditEvent_Agent';
import { AuditEvent_Entity } from '../Resource/AuditEvent_Entity';
import { AuditEvent_Source } from '../Resource/AuditEvent_Source';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Coding } from '../Resource/Coding';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Instant } from '../Scalar/Instant';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum AuditEventActionKind {
                c,
r,
u,
d,
e
            }
export enum AuditEventOutcomeKind {
                success,
minorFailure,
seriousFailure,
majorFailure
            }

        /**
         * A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. 
         */
        export class AuditEvent  {

            constructor() {
                this.type = new Coding();
this.agent = new Array<AuditEvent_Agent>();
this.source = new AuditEvent_Source();
            }

            
                /**
                 * This is a AuditEvent resource
                 */
                resourceType: string = 'AuditEvent;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                implicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                contained? : ResourceList[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function.
                 */
                type : Coding;
                

                /**
                 * Identifier for the category of event.
                 */
                subtype? : Coding[];
                

                /**
                 * Indicator for type of action performed during the event that generated the audit.
                 */
                action? : AuditEventActionKind;
                

                /**
                 * Extensions for action
                 */
                _action? : Element;
                

                /**
                 * The period during which the activity occurred.
                 */
                period? : Period;
                

                /**
                 * The time when the event was recorded.
                 */
                recorded? : Instant;
                

                /**
                 * Extensions for recorded
                 */
                _recorded? : Element;
                

                /**
                 * Indicates whether the event succeeded or failed.
                 */
                outcome? : AuditEventOutcomeKind;
                

                /**
                 * Extensions for outcome
                 */
                _outcome? : Element;
                

                /**
                 * A free text description of the outcome of the event.
                 */
                outcomeDesc? : string;
                

                /**
                 * Extensions for outcomeDesc
                 */
                _outcomeDesc? : Element;
                

                /**
                 * The purposeOfUse (reason) that was used during the event being recorded.
                 */
                purposeOfEvent? : CodeableConcept[];
                

                /**
                 * An actor taking an active role in the event or activity that is logged.
                 */
                agent : AuditEvent_Agent[];
                

                /**
                 * The system that is reporting the event.
                 */
                source : AuditEvent_Source;
                

                /**
                 * Specific instances of data or objects that have been accessed.
                 */
                entity? : AuditEvent_Entity[];
                
        }
        