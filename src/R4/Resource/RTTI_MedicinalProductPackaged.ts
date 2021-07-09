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
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_MarketingStatus, IMarketingStatus} from './RTTI_MarketingStatus';
import {
  RTTI_MedicinalProductPackaged_BatchIdentifier,
  IMedicinalProductPackaged_BatchIdentifier,
} from './RTTI_MedicinalProductPackaged_BatchIdentifier';
import {
  RTTI_MedicinalProductPackaged_PackageItem,
  IMedicinalProductPackaged_PackageItem,
} from './RTTI_MedicinalProductPackaged_PackageItem';
import {IDomainResource} from './IDomainResource';

export interface IMedicinalProductPackaged extends IDomainResource {
  /**
   * This is a MedicinalProductPackaged resource
   */
  resourceType: 'MedicinalProductPackaged';

  /**
   * A packaging item, as a contained for medicine, possibly with other packaging items within.
   */
  packageItem: IMedicinalProductPackaged_PackageItem[];

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
   * Unique identifier.
   */
  identifier?: IIdentifier[];

  /**
   * The product with this is a pack for.
   */
  subject?: IReference[];

  /**
   * Textual description.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * The legal status of supply of the medicinal product as classified by the regulator.
   */
  legalStatusOfSupply?: ICodeableConcept;

  /**
   * Marketing information.
   */
  marketingStatus?: IMarketingStatus[];

  /**
   * Manufacturer of this Package Item.
   */
  marketingAuthorization?: IReference;

  /**
   * Manufacturer of this Package Item.
   */
  manufacturer?: IReference[];

  /**
   * Batch numbering.
   */
  batchIdentifier?: IMedicinalProductPackaged_BatchIdentifier[];
}

export const RTTI_MedicinalProductPackaged: t.Type<IMedicinalProductPackaged> =
  t.recursion('IMedicinalProductPackaged', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('MedicinalProductPackaged'),
        packageItem: t.array(RTTI_MedicinalProductPackaged_PackageItem),
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
        subject: t.array(RTTI_Reference),
        description: t.string,
        _description: RTTI_Element,
        legalStatusOfSupply: RTTI_CodeableConcept,
        marketingStatus: t.array(RTTI_MarketingStatus),
        marketingAuthorization: RTTI_Reference,
        manufacturer: t.array(RTTI_Reference),
        batchIdentifier: t.array(RTTI_MedicinalProductPackaged_BatchIdentifier),
      }),
    ]),
  );
