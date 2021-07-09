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
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {
  RTTI_ExplanationOfBenefit_Related,
  IExplanationOfBenefit_Related,
} from './RTTI_ExplanationOfBenefit_Related';
import {
  RTTI_ExplanationOfBenefit_Payee,
  IExplanationOfBenefit_Payee,
} from './RTTI_ExplanationOfBenefit_Payee';

import {
  RTTI_ExplanationOfBenefit_CareTeam,
  IExplanationOfBenefit_CareTeam,
} from './RTTI_ExplanationOfBenefit_CareTeam';
import {
  RTTI_ExplanationOfBenefit_SupportingInfo,
  IExplanationOfBenefit_SupportingInfo,
} from './RTTI_ExplanationOfBenefit_SupportingInfo';
import {
  RTTI_ExplanationOfBenefit_Diagnosis,
  IExplanationOfBenefit_Diagnosis,
} from './RTTI_ExplanationOfBenefit_Diagnosis';
import {
  RTTI_ExplanationOfBenefit_Procedure,
  IExplanationOfBenefit_Procedure,
} from './RTTI_ExplanationOfBenefit_Procedure';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {
  RTTI_ExplanationOfBenefit_Insurance,
  IExplanationOfBenefit_Insurance,
} from './RTTI_ExplanationOfBenefit_Insurance';
import {
  RTTI_ExplanationOfBenefit_Accident,
  IExplanationOfBenefit_Accident,
} from './RTTI_ExplanationOfBenefit_Accident';
import {
  RTTI_ExplanationOfBenefit_Item,
  IExplanationOfBenefit_Item,
} from './RTTI_ExplanationOfBenefit_Item';
import {
  RTTI_ExplanationOfBenefit_AddItem,
  IExplanationOfBenefit_AddItem,
} from './RTTI_ExplanationOfBenefit_AddItem';
import {
  RTTI_ExplanationOfBenefit_Adjudication,
  IExplanationOfBenefit_Adjudication,
} from './RTTI_ExplanationOfBenefit_Adjudication';
import {
  RTTI_ExplanationOfBenefit_Total,
  IExplanationOfBenefit_Total,
} from './RTTI_ExplanationOfBenefit_Total';
import {
  RTTI_ExplanationOfBenefit_Payment,
  IExplanationOfBenefit_Payment,
} from './RTTI_ExplanationOfBenefit_Payment';
import {RTTI_Attachment, IAttachment} from './RTTI_Attachment';
import {
  RTTI_ExplanationOfBenefit_ProcessNote,
  IExplanationOfBenefit_ProcessNote,
} from './RTTI_ExplanationOfBenefit_ProcessNote';
import {
  RTTI_ExplanationOfBenefit_BenefitBalance,
  IExplanationOfBenefit_BenefitBalance,
} from './RTTI_ExplanationOfBenefit_BenefitBalance';
export enum ExplanationOfBenefitStatusKind {
  _active = 'active',
  _cancelled = 'cancelled',
  _draft = 'draft',
  _enteredInError = 'entered-in-error',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IExplanationOfBenefit extends IDomainResource {
  /**
   * This is a ExplanationOfBenefit resource
   */
  resourceType: 'ExplanationOfBenefit';

  /**
   * The category of claim, e.g. oral, pharmacy, vision, institutional, professional.
   */
  type: ICodeableConcept;

  /**
   * The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought.
   */
  patient: IReference;

  /**
   * The party responsible for authorization, adjudication and reimbursement.
   */
  insurer: IReference;

  /**
   * The provider which is responsible for the claim, predetermination or preauthorization.
   */
  provider: IReference;

  /**
   * Financial instruments for reimbursement for the health care products and services specified on the claim.
   */
  insurance: IExplanationOfBenefit_Insurance[];

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
   * A unique identifier assigned to this explanation of benefit.
   */
  identifier?: IIdentifier[];

  /**
   * The status of the resource instance.
   */
  status?: ExplanationOfBenefitStatusKind;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service.
   */
  subType?: ICodeableConcept;

  /**
   * A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future.
   */
  use?: string;

  /**
   * Extensions for use
   */
  _use?: IElement;

  /**
   * The period for which charges are being submitted.
   */
  billablePeriod?: IPeriod;

  /**
   * The date this resource was created.
   */
  created?: string;

  /**
   * Extensions for created
   */
  _created?: IElement;

  /**
   * Individual who created the claim, predetermination or preauthorization.
   */
  enterer?: IReference;

  /**
   * The provider-required urgency of processing the request. Typical values include: stat, routine deferred.
   */
  priority?: ICodeableConcept;

  /**
   * A code to indicate whether and for whom funds are to be reserved for future claims.
   */
  fundsReserveRequested?: ICodeableConcept;

  /**
   * A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom.
   */
  fundsReserve?: ICodeableConcept;

  /**
   * Other claims which are related to this claim such as prior submissions or claims for related services or for the same event.
   */
  related?: IExplanationOfBenefit_Related[];

  /**
   * Prescription to support the dispensing of pharmacy, device or vision products.
   */
  prescription?: IReference;

  /**
   * Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products.
   */
  originalPrescription?: IReference;

  /**
   * The party to be reimbursed for cost of the products and services according to the terms of the policy.
   */
  payee?: IExplanationOfBenefit_Payee;

  /**
   * A reference to a referral resource.
   */
  referral?: IReference;

  /**
   * Facility where the services were provided.
   */
  facility?: IReference;

  /**
   * The business identifier for the instance of the adjudication request: claim predetermination or preauthorization.
   */
  claim?: IReference;

  /**
   * The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response.
   */
  claimResponse?: IReference;

  /**
   * The outcome of the claim, predetermination, or preauthorization processing.
   */
  outcome?: string;

  /**
   * Extensions for outcome
   */
  _outcome?: IElement;

  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string;

  /**
   * Extensions for disposition
   */
  _disposition?: IElement;

  /**
   * Reference from the Insurer which is used in later communications which refers to this adjudication.
   */
  preAuthRef?: string[];

  /**
   * Extensions for preAuthRef
   */
  _preAuthRef?: IElement[];

  /**
   * The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided.
   */
  preAuthRefPeriod?: IPeriod[];

  /**
   * The members of the team who provided the products and services.
   */
  careTeam?: IExplanationOfBenefit_CareTeam[];

  /**
   * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
   */
  supportingInfo?: IExplanationOfBenefit_SupportingInfo[];

  /**
   * Information about diagnoses relevant to the claim items.
   */
  diagnosis?: IExplanationOfBenefit_Diagnosis[];

  /**
   * Procedures performed on the patient relevant to the billing items with the claim.
   */
  procedure?: IExplanationOfBenefit_Procedure[];

  /**
   * This indicates the relative order of a series of EOBs related to different coverages for the same suite of services.
   */
  precedence?: number;

  /**
   * Extensions for precedence
   */
  _precedence?: IElement;

  /**
   * Details of a accident which resulted in injuries which required the products and services listed in the claim.
   */
  accident?: IExplanationOfBenefit_Accident;

  /**
   * A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details.
   */
  item?: IExplanationOfBenefit_Item[];

  /**
   * The first-tier service adjudications for payor added product or service lines.
   */
  addItem?: IExplanationOfBenefit_AddItem[];

  /**
   * The adjudication results which are presented at the header level rather than at the line-item or add-item levels.
   */
  adjudication?: IExplanationOfBenefit_Adjudication[];

  /**
   * Categorized monetary totals for the adjudication.
   */
  total?: IExplanationOfBenefit_Total[];

  /**
   * Payment details for the adjudication of the claim.
   */
  payment?: IExplanationOfBenefit_Payment;

  /**
   * A code for the form to be used for printing the content.
   */
  formCode?: ICodeableConcept;

  /**
   * The actual form, by reference or inclusion, for printing the content or an EOB.
   */
  form?: IAttachment;

  /**
   * A note that describes or explains adjudication results in a human readable form.
   */
  processNote?: IExplanationOfBenefit_ProcessNote[];

  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: IPeriod;

  /**
   * Balance by Benefit Category.
   */
  benefitBalance?: IExplanationOfBenefit_BenefitBalance[];
}

export const RTTI_ExplanationOfBenefit: t.Type<IExplanationOfBenefit> =
  t.recursion('IExplanationOfBenefit', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('ExplanationOfBenefit'),
        type: RTTI_CodeableConcept,
        patient: RTTI_Reference,
        insurer: RTTI_Reference,
        provider: RTTI_Reference,
        insurance: t.array(RTTI_ExplanationOfBenefit_Insurance),
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
        status: createEnumType<ExplanationOfBenefitStatusKind>(
          ExplanationOfBenefitStatusKind,
          'ExplanationOfBenefitStatusKind',
        ),
        _status: RTTI_Element,
        subType: RTTI_CodeableConcept,
        use: RTTI_code,
        _use: RTTI_Element,
        billablePeriod: RTTI_Period,
        created: RTTI_dateTime,
        _created: RTTI_Element,
        enterer: RTTI_Reference,
        priority: RTTI_CodeableConcept,
        fundsReserveRequested: RTTI_CodeableConcept,
        fundsReserve: RTTI_CodeableConcept,
        related: t.array(RTTI_ExplanationOfBenefit_Related),
        prescription: RTTI_Reference,
        originalPrescription: RTTI_Reference,
        payee: RTTI_ExplanationOfBenefit_Payee,
        referral: RTTI_Reference,
        facility: RTTI_Reference,
        claim: RTTI_Reference,
        claimResponse: RTTI_Reference,
        outcome: RTTI_code,
        _outcome: RTTI_Element,
        disposition: t.string,
        _disposition: RTTI_Element,
        preAuthRef: t.array(t.string),
        _preAuthRef: t.array(RTTI_Element),
        preAuthRefPeriod: t.array(RTTI_Period),
        careTeam: t.array(RTTI_ExplanationOfBenefit_CareTeam),
        supportingInfo: t.array(RTTI_ExplanationOfBenefit_SupportingInfo),
        diagnosis: t.array(RTTI_ExplanationOfBenefit_Diagnosis),
        procedure: t.array(RTTI_ExplanationOfBenefit_Procedure),
        precedence: RTTI_positiveInt,
        _precedence: RTTI_Element,
        accident: RTTI_ExplanationOfBenefit_Accident,
        item: t.array(RTTI_ExplanationOfBenefit_Item),
        addItem: t.array(RTTI_ExplanationOfBenefit_AddItem),
        adjudication: t.array(RTTI_ExplanationOfBenefit_Adjudication),
        total: t.array(RTTI_ExplanationOfBenefit_Total),
        payment: RTTI_ExplanationOfBenefit_Payment,
        formCode: RTTI_CodeableConcept,
        form: RTTI_Attachment,
        processNote: t.array(RTTI_ExplanationOfBenefit_ProcessNote),
        benefitPeriod: RTTI_Period,
        benefitBalance: t.array(RTTI_ExplanationOfBenefit_BenefitBalance),
      }),
    ]),
  );
