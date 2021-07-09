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
import {RTTI_Period, IPeriod} from './RTTI_Period';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {
  RTTI_CoverageEligibilityResponse_Insurance,
  ICoverageEligibilityResponse_Insurance,
} from './RTTI_CoverageEligibilityResponse_Insurance';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_CoverageEligibilityResponse_Error,
  ICoverageEligibilityResponse_Error,
} from './RTTI_CoverageEligibilityResponse_Error';
export enum CoverageEligibilityResponsePurposeKind {
  _authRequirements = 'auth-requirements',
  _benefits = 'benefits',
  _discovery = 'discovery',
  _validation = 'validation',
}
export enum CoverageEligibilityResponseOutcomeKind {
  _queued = 'queued',
  _complete = 'complete',
  _error = 'error',
  _partial = 'partial',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface ICoverageEligibilityResponse extends IDomainResource {
  /**
   * This is a CoverageEligibilityResponse resource
   */
  resourceType: 'CoverageEligibilityResponse';

  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  patient: IReference;

  /**
   * Reference to the original request resource.
   */
  request: IReference;

  /**
   * The Insurer who issued the coverage in question and is the author of the response.
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
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose?: CoverageEligibilityResponsePurposeKind[];

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
   * The date this resource was created.
   */
  created?: string;

  /**
   * Extensions for created
   */
  _created?: IElement;

  /**
   * The provider which is responsible for the request.
   */
  requestor?: IReference;

  /**
   * The outcome of the request processing.
   */
  outcome?: CoverageEligibilityResponseOutcomeKind;

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
   * Financial instruments for reimbursement for the health care products and services.
   */
  insurance?: ICoverageEligibilityResponse_Insurance[];

  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  preAuthRef?: string;

  /**
   * Extensions for preAuthRef
   */
  _preAuthRef?: IElement;

  /**
   * A code for the form to be used for printing the content.
   */
  form?: ICodeableConcept;

  /**
   * Errors encountered during the processing of the request.
   */
  error?: ICoverageEligibilityResponse_Error[];
}

export const RTTI_CoverageEligibilityResponse: t.Type<ICoverageEligibilityResponse> =
  t.recursion('ICoverageEligibilityResponse', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('CoverageEligibilityResponse'),
        patient: RTTI_Reference,
        request: RTTI_Reference,
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
        purpose: t.array(
          createEnumType<CoverageEligibilityResponsePurposeKind>(
            CoverageEligibilityResponsePurposeKind,
            'CoverageEligibilityResponsePurposeKind',
          ),
        ),
        _purpose: t.array(RTTI_Element),
        servicedDate: t.string,
        _servicedDate: RTTI_Element,
        servicedPeriod: RTTI_Period,
        created: RTTI_dateTime,
        _created: RTTI_Element,
        requestor: RTTI_Reference,
        outcome: createEnumType<CoverageEligibilityResponseOutcomeKind>(
          CoverageEligibilityResponseOutcomeKind,
          'CoverageEligibilityResponseOutcomeKind',
        ),
        _outcome: RTTI_Element,
        disposition: t.string,
        _disposition: RTTI_Element,
        insurance: t.array(RTTI_CoverageEligibilityResponse_Insurance),
        preAuthRef: t.string,
        _preAuthRef: RTTI_Element,
        form: RTTI_CodeableConcept,
        error: t.array(RTTI_CoverageEligibilityResponse_Error),
      }),
    ]),
  );
