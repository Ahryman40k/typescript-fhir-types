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
import {IDomainResource} from './IDomainResource';

export interface IOrganizationAffiliation extends IDomainResource {
  /**
   * This is a OrganizationAffiliation resource
   */
  resourceType: 'OrganizationAffiliation';

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
   * Business identifiers that are specific to this role.
   */
  identifier?: IIdentifier[];

  /**
   * Whether this organization affiliation record is in active use.
   */
  active?: boolean;

  /**
   * Extensions for active
   */
  _active?: IElement;

  /**
   * The period during which the participatingOrganization is affiliated with the primary organization.
   */
  period?: IPeriod;

  /**
   * Organization where the role is available (primary organization/has members).
   */
  organization?: IReference;

  /**
   * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
   */
  participatingOrganization?: IReference;

  /**
   * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
   */
  network?: IReference[];

  /**
   * Definition of the role the participatingOrganization plays in the association.
   */
  code?: ICodeableConcept[];

  /**
   * Specific specialty of the participatingOrganization in the context of the role.
   */
  specialty?: ICodeableConcept[];

  /**
   * The location(s) at which the role occurs.
   */
  location?: IReference[];

  /**
   * Healthcare services provided through the role.
   */
  healthcareService?: IReference[];

  /**
   * Contact details at the participatingOrganization relevant to this Affiliation.
   */
  telecom?: IContactPoint[];

  /**
   * Technical endpoints providing access to services operated for this role.
   */
  endpoint?: IReference[];
}

export const RTTI_OrganizationAffiliation: t.Type<IOrganizationAffiliation> =
  t.recursion('IOrganizationAffiliation', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('OrganizationAffiliation'),
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
        organization: RTTI_Reference,
        participatingOrganization: RTTI_Reference,
        network: t.array(RTTI_Reference),
        code: t.array(RTTI_CodeableConcept),
        specialty: t.array(RTTI_CodeableConcept),
        location: t.array(RTTI_Reference),
        healthcareService: t.array(RTTI_Reference),
        telecom: t.array(RTTI_ContactPoint),
        endpoint: t.array(RTTI_Reference),
      }),
    ]),
  );
