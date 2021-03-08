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
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {IDomainResource} from './IDomainResource';

export interface ISchedule extends IDomainResource {
  /**
   * This is a Schedule resource
   */
  resourceType: 'Schedule';

  /**
   * Slots that reference this schedule resource provide the availability details to these referenced resource(s).
   */
  actor: IReference[];

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
   * External Ids for this item.
   */
  identifier?: IIdentifier[];

  /**
   * Whether this schedule record is in active use or should not be used (such as was entered in error).
   */
  active?: boolean;

  /**
   * Extensions for active
   */
  _active?: IElement;

  /**
   * A broad categorization of the service that is to be performed during this appointment.
   */
  serviceCategory?: ICodeableConcept[];

  /**
   * The specific service that is to be performed during this appointment.
   */
  serviceType?: ICodeableConcept[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this appointment.
   */
  specialty?: ICodeableConcept[];

  /**
   * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
   */
  planningHorizon?: IPeriod;

  /**
   * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
   */
  comment?: string;

  /**
   * Extensions for comment
   */
  _comment?: IElement;
}

export const RTTI_Schedule: t.Type<ISchedule> = t.recursion('ISchedule', () =>
  t.intersection([
    t.type({
      resourceType: t.literal('Schedule'),
      actor: t.array(RTTI_Reference),
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
      active: t.boolean,
      _active: RTTI_Element,
      serviceCategory: t.array(RTTI_CodeableConcept),
      serviceType: t.array(RTTI_CodeableConcept),
      specialty: t.array(RTTI_CodeableConcept),
      planningHorizon: RTTI_Period,
      comment: t.string,
      _comment: RTTI_Element,
    }),
  ]),
);
