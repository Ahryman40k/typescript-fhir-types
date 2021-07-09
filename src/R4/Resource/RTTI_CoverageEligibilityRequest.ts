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
  RTTI_CoverageEligibilityRequest_SupportingInfo,
  ICoverageEligibilityRequest_SupportingInfo,
} from './RTTI_CoverageEligibilityRequest_SupportingInfo';
import {
  RTTI_CoverageEligibilityRequest_Insurance,
  ICoverageEligibilityRequest_Insurance,
} from './RTTI_CoverageEligibilityRequest_Insurance';
import {
  RTTI_CoverageEligibilityRequest_Item,
  ICoverageEligibilityRequest_Item,
} from './RTTI_CoverageEligibilityRequest_Item';
export enum CoverageEligibilityRequestPurposeKind {
  _authRequirements = 'auth-requirements',
  _benefits = 'benefits',
  _discovery = 'discovery',
  _validation = 'validation',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface ICoverageEligibilityRequest extends IDomainResource {
  /**
   * This is a CoverageEligibilityRequest resource
   */
  resourceType: 'CoverageEligibilityRequest';

  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  patient: IReference;

  /**
   * The Insurer who issued the coverage in question and is the recipient of the request.
   */
  insurer: IReference;

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
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: IIdentifier[];

  /**
   * The status of the resource instance.
   */
  status?: string;

  /**
   * Extensions for status
   */
  _status?: IElement;

  /**
   * When the requestor expects the processor to complete processing.
   */
  priority?: ICodeableConcept;

  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose?: CoverageEligibilityRequestPurposeKind[];

  /**
   * Extensions for purpose
   */
  _purpose?: IElement[];

  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: string;

  /**
   * Extensions for servicedDate
   */
  _servicedDate?: IElement;

  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: IPeriod;

  /**
   * The date when this resource was created.
   */
  created?: string;

  /**
   * Extensions for created
   */
  _created?: IElement;

  /**
   * Person who created the request.
   */
  enterer?: IReference;

  /**
   * The provider which is responsible for the request.
   */
  provider?: IReference;

  /**
   * Facility where the services are intended to be provided.
   */
  facility?: IReference;

  /**
   * Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues.
   */
  supportingInfo?: ICoverageEligibilityRequest_SupportingInfo[];

  /**
   * Financial instruments for reimbursement for the health care products and services.
   */
  insurance?: ICoverageEligibilityRequest_Insurance[];

  /**
   * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   */
  item?: ICoverageEligibilityRequest_Item[];
}

export const RTTI_CoverageEligibilityRequest: t.Type<ICoverageEligibilityRequest> =
  t.recursion('ICoverageEligibilityRequest', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('CoverageEligibilityRequest'),
        patient: RTTI_Reference,
        insurer: RTTI_Reference,
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
        status: RTTI_code,
        _status: RTTI_Element,
        priority: RTTI_CodeableConcept,
        purpose: t.array(
          createEnumType<CoverageEligibilityRequestPurposeKind>(
            CoverageEligibilityRequestPurposeKind,
            'CoverageEligibilityRequestPurposeKind',
          ),
        ),
        _purpose: t.array(RTTI_Element),
        servicedDate: t.string,
        _servicedDate: RTTI_Element,
        servicedPeriod: RTTI_Period,
        created: RTTI_dateTime,
        _created: RTTI_Element,
        enterer: RTTI_Reference,
        provider: RTTI_Reference,
        facility: RTTI_Reference,
        supportingInfo: t.array(RTTI_CoverageEligibilityRequest_SupportingInfo),
        insurance: t.array(RTTI_CoverageEligibilityRequest_Insurance),
        item: t.array(RTTI_CoverageEligibilityRequest_Item),
      }),
    ]),
  );
