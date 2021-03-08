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
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {
  RTTI_PractitionerRole_AvailableTime,
  IPractitionerRole_AvailableTime,
} from './RTTI_PractitionerRole_AvailableTime';
import {
  RTTI_PractitionerRole_NotAvailable,
  IPractitionerRole_NotAvailable,
} from './RTTI_PractitionerRole_NotAvailable';
import {IDomainResource} from './IDomainResource';

export interface IPractitionerRole extends IDomainResource {
  /**
   * This is a PractitionerRole resource
   */
  resourceType: 'PractitionerRole';

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
   * Business Identifiers that are specific to a role/location.
   */
  identifier?: IIdentifier[];

  /**
   * Whether this practitioner role record is in active use.
   */
  active?: boolean;

  /**
   * Extensions for active
   */
  _active?: IElement;

  /**
   * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
   */
  period?: IPeriod;

  /**
   * Practitioner that is able to provide the defined services for the organization.
   */
  practitioner?: IReference;

  /**
   * The organization where the Practitioner performs the roles associated.
   */
  organization?: IReference;

  /**
   * Roles which this practitioner is authorized to perform for the organization.
   */
  code?: ICodeableConcept[];

  /**
   * Specific specialty of the practitioner.
   */
  specialty?: ICodeableConcept[];

  /**
   * The location(s) at which this practitioner provides care.
   */
  location?: IReference[];

  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  healthcareService?: IReference[];

  /**
   * Contact details that are specific to the role/location/service.
   */
  telecom?: IContactPoint[];

  /**
   * A collection of times the practitioner is available or performing this role at the location and/or healthcareservice.
   */
  availableTime?: IPractitionerRole_AvailableTime[];

  /**
   * The practitioner is not available or performing this role during this period of time due to the provided reason.
   */
  notAvailable?: IPractitionerRole_NotAvailable[];

  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: string;

  /**
   * Extensions for availabilityExceptions
   */
  _availabilityExceptions?: IElement;

  /**
   * Technical endpoints providing access to services operated for the practitioner with this role.
   */
  endpoint?: IReference[];
}

export const RTTI_PractitionerRole: t.Type<IPractitionerRole> = t.recursion(
  'IPractitionerRole',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('PractitionerRole'),
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
        period: RTTI_Period,
        practitioner: RTTI_Reference,
        organization: RTTI_Reference,
        code: t.array(RTTI_CodeableConcept),
        specialty: t.array(RTTI_CodeableConcept),
        location: t.array(RTTI_Reference),
        healthcareService: t.array(RTTI_Reference),
        telecom: t.array(RTTI_ContactPoint),
        availableTime: t.array(RTTI_PractitionerRole_AvailableTime),
        notAvailable: t.array(RTTI_PractitionerRole_NotAvailable),
        availabilityExceptions: t.string,
        _availabilityExceptions: RTTI_Element,
        endpoint: t.array(RTTI_Reference),
      }),
    ]),
);
