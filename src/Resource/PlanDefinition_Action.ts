
        import { Age } from '../Resource/Age';
import { Canonical } from '../Scalar/Canonical';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DataRequirement } from '../Resource/DataRequirement';
import { Duration } from '../Resource/Duration';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Period } from '../Resource/Period';
import { PlanDefinition_Condition } from '../Resource/PlanDefinition_Condition';
import { PlanDefinition_DynamicValue } from '../Resource/PlanDefinition_DynamicValue';
import { PlanDefinition_Participant } from '../Resource/PlanDefinition_Participant';
import { PlanDefinition_RelatedAction } from '../Resource/PlanDefinition_RelatedAction';
import { Range } from '../Resource/Range';
import { RelatedArtifact } from '../Resource/RelatedArtifact';
import { Timing } from '../Resource/Timing';
import { TriggerDefinition } from '../Resource/TriggerDefinition';

        export enum PlanDefinition_ActionGroupingBehaviorKind {
                visualGroup,
logicalGroup,
sentenceGroup
            }
export enum PlanDefinition_ActionSelectionBehaviorKind {
                any,
all,
allOrNone,
exactlyOne,
atMostOne,
oneOrMore
            }
export enum PlanDefinition_ActionRequiredBehaviorKind {
                must,
could,
mustUnlessDocumented
            }
export enum PlanDefinition_ActionPrecheckBehaviorKind {
                yes,
no
            }
export enum PlanDefinition_ActionCardinalityBehaviorKind {
                single,
multiple
            }

        /**
         * This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. 
         */
        export class PlanDefinition_Action  {

            constructor() {
                
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
                 * A user-visible prefix for the action.
                 */
                Prefix? : String;
                

                /**
                 * Extensions for prefix
                 */
                _prefix? : Element;
                

                /**
                 * The title of the action displayed to a user.
                 */
                Title? : String;
                

                /**
                 * Extensions for title
                 */
                _title? : Element;
                

                /**
                 * A brief description of the action used to provide a summary to display to the user.
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
                 */
                TextEquivalent? : String;
                

                /**
                 * Extensions for textEquivalent
                 */
                _textEquivalent? : Element;
                

                /**
                 * Indicates how quickly the action should be addressed with respect to other actions.
                 */
                Priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
                 */
                Code? : Array<CodeableConcept>;
                

                /**
                 * A description of why this action is necessary or appropriate.
                 */
                Reason? : Array<CodeableConcept>;
                

                /**
                 * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
                 */
                Documentation? : Array<RelatedArtifact>;
                

                /**
                 * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
                 */
                GoalId? : Array<Id>;
                

                /**
                 * Extensions for goalId
                 */
                _goalId? : Array<Element>;
                

                /**
                 * A description of when the action should be triggered.
                 */
                Trigger? : Array<TriggerDefinition>;
                

                /**
                 * An expression that describes applicability criteria or start/stop conditions for the action.
                 */
                Condition? : Array<PlanDefinition_Condition>;
                

                /**
                 * Defines input data requirements for the action.
                 */
                Input? : Array<DataRequirement>;
                

                /**
                 * Defines the outputs of the action, if any.
                 */
                Output? : Array<DataRequirement>;
                

                /**
                 * A relationship to another action such as "before" or "30-60 minutes after start of".
                 */
                RelatedAction? : Array<PlanDefinition_RelatedAction>;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                TimingDateTime? : String;
                

                /**
                 * Extensions for timingDateTime
                 */
                _timingDateTime? : Element;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                TimingAge? : Age;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                TimingPeriod? : Period;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                TimingDuration? : Duration;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                TimingRange? : Range;
                

                /**
                 * An optional value describing when the action should be performed.
                 */
                TimingTiming? : Timing;
                

                /**
                 * Indicates who should participate in performing the action described.
                 */
                Participant? : Array<PlanDefinition_Participant>;
                

                /**
                 * The type of action to perform (create, update, remove).
                 */
                Type? : CodeableConcept;
                

                /**
                 * Defines the grouping behavior for the action and its children.
                 */
                GroupingBehavior? : PlanDefinition_ActionGroupingBehaviorKind;
                

                /**
                 * Extensions for groupingBehavior
                 */
                _groupingBehavior? : Element;
                

                /**
                 * Defines the selection behavior for the action and its children.
                 */
                SelectionBehavior? : PlanDefinition_ActionSelectionBehaviorKind;
                

                /**
                 * Extensions for selectionBehavior
                 */
                _selectionBehavior? : Element;
                

                /**
                 * Defines the required behavior for the action.
                 */
                RequiredBehavior? : PlanDefinition_ActionRequiredBehaviorKind;
                

                /**
                 * Extensions for requiredBehavior
                 */
                _requiredBehavior? : Element;
                

                /**
                 * Defines whether the action should usually be preselected.
                 */
                PrecheckBehavior? : PlanDefinition_ActionPrecheckBehaviorKind;
                

                /**
                 * Extensions for precheckBehavior
                 */
                _precheckBehavior? : Element;
                

                /**
                 * Defines whether the action can be selected multiple times.
                 */
                CardinalityBehavior? : PlanDefinition_ActionCardinalityBehaviorKind;
                

                /**
                 * Extensions for cardinalityBehavior
                 */
                _cardinalityBehavior? : Element;
                

                /**
                 * A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
                 */
                Definition? : Canonical;
                

                /**
                 * A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
                 */
                Transform? : Canonical;
                

                /**
                 * Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
                 */
                DynamicValue? : Array<PlanDefinition_DynamicValue>;
                

                /**
                 * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
                 */
                Action? : Array<PlanDefinition_Action>;
                
        }
        