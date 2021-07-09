import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_RelatedArtifact, IRelatedArtifact} from './RTTI_RelatedArtifact';
import {
  RTTI_RequestGroup_Condition,
  IRequestGroup_Condition,
} from './RTTI_RequestGroup_Condition';
import {
  RTTI_RequestGroup_RelatedAction,
  IRequestGroup_RelatedAction,
} from './RTTI_RequestGroup_RelatedAction';
import {RTTI_Age, IAge} from './RTTI_Age';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Duration, IDuration} from './RTTI_Duration';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_Reference, IReference} from './RTTI_Reference';

export interface IRequestGroup_Action {
  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * A user-visible prefix for the action.
   */
  prefix?: string;

  /**
   * Extensions for prefix
   */
  _prefix?: IElement;

  /**
   * The title of the action displayed to a user.
   */
  title?: string;

  /**
   * Extensions for title
   */
  _title?: IElement;

  /**
   * A short description of the action used to provide a summary to display to the user.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
   */
  textEquivalent?: string;

  /**
   * Extensions for textEquivalent
   */
  _textEquivalent?: IElement;

  /**
   * Indicates how quickly the action should be addressed with respect to other actions.
   */
  priority?: string;

  /**
   * Extensions for priority
   */
  _priority?: IElement;

  /**
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
   */
  code?: ICodeableConcept[];

  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: IRelatedArtifact[];

  /**
   * An expression that describes applicability criteria, or start/stop conditions for the action.
   */
  condition?: IRequestGroup_Condition[];

  /**
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   */
  relatedAction?: IRequestGroup_RelatedAction[];

  /**
   * An optional value describing when the action should be performed.
   */
  timingDateTime?: string;

  /**
   * Extensions for timingDateTime
   */
  _timingDateTime?: IElement;

  /**
   * An optional value describing when the action should be performed.
   */
  timingAge?: IAge;

  /**
   * An optional value describing when the action should be performed.
   */
  timingPeriod?: IPeriod;

  /**
   * An optional value describing when the action should be performed.
   */
  timingDuration?: IDuration;

  /**
   * An optional value describing when the action should be performed.
   */
  timingRange?: IRange;

  /**
   * An optional value describing when the action should be performed.
   */
  timingTiming?: ITiming;

  /**
   * The participant that should perform or be responsible for this action.
   */
  participant?: IReference[];

  /**
   * The type of action to perform (create, update, remove).
   */
  type?: ICodeableConcept;

  /**
   * Defines the grouping behavior for the action and its children.
   */
  groupingBehavior?: string;

  /**
   * Extensions for groupingBehavior
   */
  _groupingBehavior?: IElement;

  /**
   * Defines the selection behavior for the action and its children.
   */
  selectionBehavior?: string;

  /**
   * Extensions for selectionBehavior
   */
  _selectionBehavior?: IElement;

  /**
   * Defines expectations around whether an action is required.
   */
  requiredBehavior?: string;

  /**
   * Extensions for requiredBehavior
   */
  _requiredBehavior?: IElement;

  /**
   * Defines whether the action should usually be preselected.
   */
  precheckBehavior?: string;

  /**
   * Extensions for precheckBehavior
   */
  _precheckBehavior?: IElement;

  /**
   * Defines whether the action can be selected multiple times.
   */
  cardinalityBehavior?: string;

  /**
   * Extensions for cardinalityBehavior
   */
  _cardinalityBehavior?: IElement;

  /**
   * The resource that is the target of the action (e.g. CommunicationRequest).
   */
  resource?: IReference;

  /**
   * Sub actions.
   */
  action?: IRequestGroup_Action[];
}

export const RTTI_RequestGroup_Action: t.Type<IRequestGroup_Action> =
  t.recursion('IRequestGroup_Action', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      prefix: t.string,
      _prefix: RTTI_Element,
      title: t.string,
      _title: RTTI_Element,
      description: t.string,
      _description: RTTI_Element,
      textEquivalent: t.string,
      _textEquivalent: RTTI_Element,
      priority: RTTI_code,
      _priority: RTTI_Element,
      code: t.array(RTTI_CodeableConcept),
      documentation: t.array(RTTI_RelatedArtifact),
      condition: t.array(RTTI_RequestGroup_Condition),
      relatedAction: t.array(RTTI_RequestGroup_RelatedAction),
      timingDateTime: t.string,
      _timingDateTime: RTTI_Element,
      timingAge: RTTI_Age,
      timingPeriod: RTTI_Period,
      timingDuration: RTTI_Duration,
      timingRange: RTTI_Range,
      timingTiming: RTTI_Timing,
      participant: t.array(RTTI_Reference),
      type: RTTI_CodeableConcept,
      groupingBehavior: RTTI_code,
      _groupingBehavior: RTTI_Element,
      selectionBehavior: RTTI_code,
      _selectionBehavior: RTTI_Element,
      requiredBehavior: RTTI_code,
      _requiredBehavior: RTTI_Element,
      precheckBehavior: RTTI_code,
      _precheckBehavior: RTTI_Element,
      cardinalityBehavior: RTTI_code,
      _cardinalityBehavior: RTTI_Element,
      resource: RTTI_Reference,
      action: t.array(RTTI_RequestGroup_Action),
    }),
  );
