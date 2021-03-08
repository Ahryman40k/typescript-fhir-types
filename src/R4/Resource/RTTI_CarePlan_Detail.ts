import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_code} from '../Scalar/RTTI_code';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_canonical} from '../Scalar/RTTI_canonical';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Timing, ITiming} from './RTTI_Timing';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
export enum CarePlan_DetailStatusKind {
  _notStarted = 'not-started',
  _scheduled = 'scheduled',
  _inProgress = 'in-progress',
  _onHold = 'on-hold',
  _completed = 'completed',
  _cancelled = 'cancelled',
  _stopped = 'stopped',
  _unknown = 'unknown',
  _enteredInError = 'entered-in-error',
}
import {createEnumType} from '../../EnumType';

export interface ICarePlan_Detail {
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
   * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   */
  kind?: string;

  /**
   * Extensions for kind
   */
  _kind?: IElement;

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesUri?: string[];

  /**
   * Extensions for instantiatesUri
   */
  _instantiatesUri?: IElement[];

  /**
   * Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter.
   */
  code?: ICodeableConcept;

  /**
   * Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.
   */
  reasonCode?: ICodeableConcept[];

  /**
   * Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan.
   */
  reasonReference?: IReference[];

  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: IReference[];

  /**
   * Identifies what progress is being made for the specific activity.
   */
  status?: CarePlan_DetailStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
   */
  statusReason?: ICodeableConcept;

  /**
   * If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan.
   */
  doNotPerform?: boolean;

  /**
   * Extensions for doNotPerform
   */
  _doNotPerform?: IElement;

  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: ITiming;

  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: IPeriod;

  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: string;

  /**
   * Extensions for scheduledString
   */
  _scheduledString?: IElement;

  /**
   * Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
   */
  location?: IReference;

  /**
   * Identifies who's expected to be involved in the activity.
   */
  performer?: IReference[];

  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: ICodeableConcept;

  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: IReference;

  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: IQuantity;

  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: IQuantity;

  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;
}

export const RTTI_CarePlan_Detail: t.Type<ICarePlan_Detail> = t.recursion(
  'ICarePlan_Detail',
  () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      kind: RTTI_code,
      _kind: RTTI_Element,
      instantiatesCanonical: t.array(RTTI_canonical),
      instantiatesUri: t.array(RTTI_uri),
      _instantiatesUri: t.array(RTTI_Element),
      code: RTTI_CodeableConcept,
      reasonCode: t.array(RTTI_CodeableConcept),
      reasonReference: t.array(RTTI_Reference),
      goal: t.array(RTTI_Reference),
      status: createEnumType<CarePlan_DetailStatusKind>(
        CarePlan_DetailStatusKind,
        'CarePlan_DetailStatusKind',
      ),
      _status: RTTI_Element,
      statusReason: RTTI_CodeableConcept,
      doNotPerform: t.boolean,
      _doNotPerform: RTTI_Element,
      scheduledTiming: RTTI_Timing,
      scheduledPeriod: RTTI_Period,
      scheduledString: t.string,
      _scheduledString: RTTI_Element,
      location: RTTI_Reference,
      performer: t.array(RTTI_Reference),
      productCodeableConcept: RTTI_CodeableConcept,
      productReference: RTTI_Reference,
      dailyAmount: RTTI_Quantity,
      quantity: RTTI_Quantity,
      description: t.string,
      _description: RTTI_Element,
    }),
);
