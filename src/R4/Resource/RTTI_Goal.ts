import * as t from 'io-ts';
import {RTTI_id} from '../Scalar/RTTI_id';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import {RTTI_ResourceList, IResourceList} from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Goal_Target, IGoal_Target} from './RTTI_Goal_Target';
import {RTTI_date} from '../Scalar/RTTI_date';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
export enum GoalLifecycleStatusKind {
  _proposed = 'proposed',
  _planned = 'planned',
  _accepted = 'accepted',
  _active = 'active',
  _onHold = 'on-hold',
  _completed = 'completed',
  _cancelled = 'cancelled',
  _enteredInError = 'entered-in-error',
  _rejected = 'rejected',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IGoal extends IDomainResource {
  /**
   * This is a Goal resource
   */
  resourceType: 'Goal';

  /**
   * Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
   */
  description: ICodeableConcept;

  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  subject: IReference;

  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
   */
  meta?: IMeta;

  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * Extensions for implicitRules
   */
  _implicitRules?: IElement;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * Extensions for language
   */
  _language?: IElement;

  /**
   * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
   */
  text?: INarrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
   */
  contained?: IResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Business identifiers assigned to this goal by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: IIdentifier[];

  /**
   * The state of the goal throughout its lifecycle.
   */
  lifecycleStatus?: GoalLifecycleStatusKind;

  /**
   * Extensions for lifecycleStatus
   */
  _lifecycleStatus?: IElement;

  /**
   * Describes the progression, or lack thereof, towards the goal against the target.
   */
  achievementStatus?: ICodeableConcept;

  /**
   * Indicates a category the goal falls within.
   */
  category?: ICodeableConcept[];

  /**
   * Identifies the mutually agreed level of importance associated with reaching/sustaining the goal.
   */
  priority?: ICodeableConcept;

  /**
   * The date or event after which the goal should begin being pursued.
   */
  startDate?: string;

  /**
   * Extensions for startDate
   */
  _startDate?: IElement;

  /**
   * The date or event after which the goal should begin being pursued.
   */
  startCodeableConcept?: ICodeableConcept;

  /**
   * Indicates what should be done by when.
   */
  target?: IGoal_Target[];

  /**
   * Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc.
   */
  statusDate?: string;

  /**
   * Extensions for statusDate
   */
  _statusDate?: IElement;

  /**
   * Captures the reason for the current status.
   */
  statusReason?: string;

  /**
   * Extensions for statusReason
   */
  _statusReason?: IElement;

  /**
   * Indicates whose goal this is - patient goal, practitioner goal, etc.
   */
  expressedBy?: IReference;

  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  addresses?: IReference[];

  /**
   * Any comments related to the goal.
   */
  note?: IAnnotation[];

  /**
   * Identifies the change (or lack of change) at the point when the status of the goal is assessed.
   */
  outcomeCode?: ICodeableConcept[];

  /**
   * Details of what's changed (or not changed).
   */
  outcomeReference?: IReference[];
}

export const RTTI_Goal: t.Type<IGoal> = t.recursion('IGoal', () =>
  t.intersection([
    t.type({
      resourceType: t.literal('Goal'),
      description: RTTI_CodeableConcept,
      subject: RTTI_Reference,
    }),
    t.partial({
      id: RTTI_id,
      meta: RTTI_Meta,
      implicitRules: RTTI_uri,
      _implicitRules: RTTI_Element,
      language: RTTI_code,
      _language: RTTI_Element,
      text: RTTI_Narrative,
      contained: t.array(RTTI_ResourceList),
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      identifier: t.array(RTTI_Identifier),
      lifecycleStatus: createEnumType<GoalLifecycleStatusKind>(
        GoalLifecycleStatusKind,
        'GoalLifecycleStatusKind',
      ),
      _lifecycleStatus: RTTI_Element,
      achievementStatus: RTTI_CodeableConcept,
      category: t.array(RTTI_CodeableConcept),
      priority: RTTI_CodeableConcept,
      startDate: t.string,
      _startDate: RTTI_Element,
      startCodeableConcept: RTTI_CodeableConcept,
      target: t.array(RTTI_Goal_Target),
      statusDate: RTTI_date,
      _statusDate: RTTI_Element,
      statusReason: t.string,
      _statusReason: RTTI_Element,
      expressedBy: RTTI_Reference,
      addresses: t.array(RTTI_Reference),
      note: t.array(RTTI_Annotation),
      outcomeCode: t.array(RTTI_CodeableConcept),
      outcomeReference: t.array(RTTI_Reference),
    }),
  ]),
);
