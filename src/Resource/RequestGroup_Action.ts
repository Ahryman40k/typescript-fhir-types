
        import { Age } from '../Resource/Age';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Period } from '../Resource/Period';
import { Range } from '../Resource/Range';
import { Reference } from '../Resource/Reference';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { RequestGroup_Condition } from '../Resource/RequestGroup_Condition';
import { RequestGroup_RelatedAction } from '../Resource/RequestGroup_RelatedAction';
import { Timing } from '../Resource/Timing';

        

        /**
         * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". 
         */
        export class RequestGroup_Action  {

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
                 * A user-visible prefix for the action.
                 */
                prefix? : string;
                

                /**
                 * Extensions for prefix
                 */
                _prefix? : Element;
                

                /**
                 * The title of the action displayed to a user.
                 */
                title? : string;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * A short description of the action used to provide a summary to display to the user.
                 */
                description? : string;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
                 */
                textEquivalent? : string;
                

                /**
                 * Extensions for textEquivalent
                 */
                _textEquivalent? : Element;
                

                /**
                 * Indicates how quickly the action should be addressed with respect to other actions.
                 */
                priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
                 */
                code? : CodeableConcept[];
                

                /**
                 * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
                 */
                documentation? : RelatedArtifact[];
                

                /**
                 * An expression that describes applicability criteria, or start/stop conditions for the action.
                 */
                condition? : RequestGroup_Condition[];
                

                /**
                 * A relationship to another action such as "before" or "30-60 minutes after start of".
                 */
                relatedAction? : RequestGroup_RelatedAction[];
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                timingDateTime? : string;
                

                /**
                 * Extensions for timingDateTime
                 */
                _timingDateTime? : Element;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                timingAge? : Age;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                timingPeriod? : Period;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                timingDuration? : Duration;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                timingRange? : Range;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                timingTiming? : Timing;
                

                /**
                 * The participant that should perform or be responsible for this action.
                 */
                participant? : Reference[];
                

                /**
                 * The type of action to perform (create, update, remove).
                 */
                type? : CodeableConcept;
                

                /**
                 * Defines the grouping behavior for the action and its children.
                 */
                groupingBehavior? : Code;
                

                /**
                 * Extensions for groupingBehavior
                 */
                _groupingBehavior? : Element;
                

                /**
                 * Defines the selection behavior for the action and its children.
                 */
                selectionBehavior? : Code;
                

                /**
                 * Extensions for selectionBehavior
                 */
                _selectionBehavior? : Element;
                

                /**
                 * Defines the requiredness behavior for the action.
                 */
                requiredBehavior? : Code;
                

                /**
                 * Extensions for requiredBehavior
                 */
                _requiredBehavior? : Element;
                

                /**
                 * Defines whether the action should usually be preselected.
                 */
                precheckBehavior? : Code;
                

                /**
                 * Extensions for precheckBehavior
                 */
                _precheckBehavior? : Element;
                

                /**
                 * Defines whether the action can be selected multiple times.
                 */
                cardinalityBehavior? : Code;
                

                /**
                 * Extensions for cardinalityBehavior
                 */
                _cardinalityBehavior? : Element;
                

                /**
                 * The resource that is the target of the action (e.g. CommunicationRequest).
                 */
                resource? : Reference;
                

                /**
                 * Sub actions.
                 */
                action? : RequestGroup_Action[];
                
        }
        