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

import {RTTI_ContactPoint, IContactPoint} from './RTTI_ContactPoint';
import {RTTI_Address, IAddress} from './RTTI_Address';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {
  RTTI_Organization_Contact,
  IOrganization_Contact,
} from './RTTI_Organization_Contact';
import {IDomainResource} from './IDomainResource';

export interface IOrganization extends IDomainResource {
  /**
   * This is a Organization resource
   */
  resourceType: 'Organization';

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
   * Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  identifier?: IIdentifier[];

  /**
   * Whether the organization's record is still in active use.
   */
  active?: boolean;

  /**
   * Extensions for active
   */
  _active?: IElement;

  /**
   * The kind(s) of organization that this is.
   */
  type?: ICodeableConcept[];

  /**
   * A name associated with the organization.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A list of alternate names that the organization is known as, or was known as in the past.
   */
  alias?: string[];

  /**
   * Extensions for alias
   */
  _alias?: IElement[];

  /**
   * A contact detail for the organization.
   */
  telecom?: IContactPoint[];

  /**
   * An address for the organization.
   */
  address?: IAddress[];

  /**
   * The organization of which this organization forms a part.
   */
  partOf?: IReference;

  /**
   * Contact for the organization for a certain purpose.
   */
  contact?: IOrganization_Contact[];

  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: IReference[];
}

export const RTTI_Organization: t.Type<IOrganization> = t.recursion(
  'IOrganization',
  () =>
    t.intersection([
      t.type({
        resourceType: t.literal('Organization'),
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
        type: t.array(RTTI_CodeableConcept),
        name: t.string,
        _name: RTTI_Element,
        alias: t.array(t.string),
        _alias: t.array(RTTI_Element),
        telecom: t.array(RTTI_ContactPoint),
        address: t.array(RTTI_Address),
        partOf: RTTI_Reference,
        contact: t.array(RTTI_Organization_Contact),
        endpoint: t.array(RTTI_Reference),
      }),
    ]),
);
