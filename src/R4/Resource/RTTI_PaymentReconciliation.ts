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
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_date} from '../Scalar/RTTI_date';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {
  RTTI_PaymentReconciliation_Detail,
  IPaymentReconciliation_Detail,
} from './RTTI_PaymentReconciliation_Detail';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_PaymentReconciliation_ProcessNote,
  IPaymentReconciliation_ProcessNote,
} from './RTTI_PaymentReconciliation_ProcessNote';
export enum PaymentReconciliationOutcomeKind {
  _queued = 'queued',
  _complete = 'complete',
  _error = 'error',
  _partial = 'partial',
}
import {createEnumType} from '../../EnumType';
import {IDomainResource} from './IDomainResource';

export interface IPaymentReconciliation extends IDomainResource {
  /**
   * This is a PaymentReconciliation resource
   */
  resourceType: 'PaymentReconciliation';

  /**
   * Total payment amount as indicated on the financial instrument.
   */
  paymentAmount: IMoney;

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
   * A unique identifier assigned to this payment reconciliation.
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
   * The period of time for which payments have been gathered into this bulk payment for settlement.
   */
  period?: IPeriod;

  /**
   * The date when the resource was created.
   */
  created?: string;

  /**
   * Extensions for created
   */
  _created?: IElement;

  /**
   * The party who generated the payment.
   */
  paymentIssuer?: IReference;

  /**
   * Original request resource reference.
   */
  request?: IReference;

  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestor?: IReference;

  /**
   * The outcome of a request for a reconciliation.
   */
  outcome?: PaymentReconciliationOutcomeKind;

  /**
   * Extensions for outcome
   */
  _outcome?: IElement;

  /**
   * A human readable description of the status of the request for the reconciliation.
   */
  disposition?: string;

  /**
   * Extensions for disposition
   */
  _disposition?: IElement;

  /**
   * The date of payment as indicated on the financial instrument.
   */
  paymentDate?: string;

  /**
   * Extensions for paymentDate
   */
  _paymentDate?: IElement;

  /**
   * Issuer's unique identifier for the payment instrument.
   */
  paymentIdentifier?: IIdentifier;

  /**
   * Distribution of the payment amount for a previously acknowledged payable.
   */
  detail?: IPaymentReconciliation_Detail[];

  /**
   * A code for the form to be used for printing the content.
   */
  formCode?: ICodeableConcept;

  /**
   * A note that describes or explains the processing in a human readable form.
   */
  processNote?: IPaymentReconciliation_ProcessNote[];
}

export const RTTI_PaymentReconciliation: t.Type<IPaymentReconciliation> =
  t.recursion('IPaymentReconciliation', () =>
    t.intersection([
      t.type({
        resourceType: t.literal('PaymentReconciliation'),
        paymentAmount: RTTI_Money,
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
        period: RTTI_Period,
        created: RTTI_dateTime,
        _created: RTTI_Element,
        paymentIssuer: RTTI_Reference,
        request: RTTI_Reference,
        requestor: RTTI_Reference,
        outcome: createEnumType<PaymentReconciliationOutcomeKind>(
          PaymentReconciliationOutcomeKind,
          'PaymentReconciliationOutcomeKind',
        ),
        _outcome: RTTI_Element,
        disposition: t.string,
        _disposition: RTTI_Element,
        paymentDate: RTTI_date,
        _paymentDate: RTTI_Element,
        paymentIdentifier: RTTI_Identifier,
        detail: t.array(RTTI_PaymentReconciliation_Detail),
        formCode: RTTI_CodeableConcept,
        processNote: t.array(RTTI_PaymentReconciliation_ProcessNote),
      }),
    ]),
  );
