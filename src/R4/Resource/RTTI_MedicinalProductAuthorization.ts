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
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {
  RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization,
  IMedicinalProductAuthorization_JurisdictionalAuthorization,
} from './RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization';
import {
  RTTI_MedicinalProductAuthorization_Procedure,
  IMedicinalProductAuthorization_Procedure,
} from './RTTI_MedicinalProductAuthorization_Procedure';
import {IDomainResource} from './IDomainResource';

export interface IMedicinalProductAuthorization extends IDomainResource {
  /**
   * This is a MedicinalProductAuthorization resource
   */
  resourceType: 'MedicinalProductAuthorization';

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
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  identifier?: IIdentifier[];

  /**
   * The medicinal product that is being authorized.
   */
  subject?: IReference;

  /**
   * The country in which the marketing authorization has been granted.
   */
  country?: ICodeableConcept[];

  /**
   * Jurisdiction within a country.
   */
  jurisdiction?: ICodeableConcept[];

  /**
   * The status of the marketing authorization.
   */
  status?: ICodeableConcept;

  /**
   * The date at which the given status has become applicable.
   */
  statusDate?: string;

  /**
   * Extensions for statusDate
   */
  _statusDate?: IElement;

  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  restoreDate?: string;

  /**
   * Extensions for restoreDate
   */
  _restoreDate?: IElement;

  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format.
   */
  validityPeriod?: IPeriod;

  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  dataExclusivityPeriod?: IPeriod;

  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  dateOfFirstAuthorization?: string;

  /**
   * Extensions for dateOfFirstAuthorization
   */
  _dateOfFirstAuthorization?: IElement;

  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  internationalBirthDate?: string;

  /**
   * Extensions for internationalBirthDate
   */
  _internationalBirthDate?: IElement;

  /**
   * The legal framework against which this authorization is granted.
   */
  legalBasis?: ICodeableConcept;

  /**
   * Authorization in areas within a country.
   */
  jurisdictionalAuthorization?: IMedicinalProductAuthorization_JurisdictionalAuthorization[];

  /**
   * Marketing Authorization Holder.
   */
  holder?: IReference;

  /**
   * Medicines Regulatory Agency.
   */
  regulator?: IReference;

  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  procedure?: IMedicinalProductAuthorization_Procedure;
}

export const RTTI_MedicinalProductAuthorization: t.Type<IMedicinalProductAuthorization> =
  t.recursion('IMedicinalProductAuthorization', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('MedicinalProductAuthorization'),
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
        subject: RTTI_Reference,
        country: t.array(RTTI_CodeableConcept),
        jurisdiction: t.array(RTTI_CodeableConcept),
        status: RTTI_CodeableConcept,
        statusDate: RTTI_dateTime,
        _statusDate: RTTI_Element,
        restoreDate: RTTI_dateTime,
        _restoreDate: RTTI_Element,
        validityPeriod: RTTI_Period,
        dataExclusivityPeriod: RTTI_Period,
        dateOfFirstAuthorization: RTTI_dateTime,
        _dateOfFirstAuthorization: RTTI_Element,
        internationalBirthDate: RTTI_dateTime,
        _internationalBirthDate: RTTI_Element,
        legalBasis: RTTI_CodeableConcept,
        jurisdictionalAuthorization: t.array(
          RTTI_MedicinalProductAuthorization_JurisdictionalAuthorization,
        ),
        holder: RTTI_Reference,
        regulator: RTTI_Reference,
        procedure: RTTI_MedicinalProductAuthorization_Procedure,
      }),
    ]),
  );
