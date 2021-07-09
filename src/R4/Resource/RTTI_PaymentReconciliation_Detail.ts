import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_date} from '../Scalar/RTTI_date';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Money, IMoney} from './RTTI_Money';

export interface IPaymentReconciliation_Detail {
  /**
   * Code to indicate the nature of the payment.
   */
  type: ICodeableConcept;

  /**
   * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
   */
  extension?: IExtension[];

  /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
  modifierExtension?: IExtension[];

  /**
   * Unique identifier for the current payment item for the referenced payable.
   */
  identifier?: IIdentifier;

  /**
   * Unique identifier for the prior payment item for the referenced payable.
   */
  predecessor?: IIdentifier;

  /**
   * A resource, such as a Claim, the evaluation of which could lead to payment.
   */
  request?: IReference;

  /**
   * The party which submitted the claim or financial transaction.
   */
  submitter?: IReference;

  /**
   * A resource, such as a ClaimResponse, which contains a commitment to payment.
   */
  response?: IReference;

  /**
   * The date from the response resource containing a commitment to pay.
   */
  date?: string;

  /**
   * Extensions for date
   */
  _date?: IElement;

  /**
   * A reference to the individual who is responsible for inquiries regarding the response and its payment.
   */
  responsible?: IReference;

  /**
   * The party which is receiving the payment.
   */
  payee?: IReference;

  /**
   * The monetary amount allocated from the total payment to the payable.
   */
  amount?: IMoney;
}

export const RTTI_PaymentReconciliation_Detail: t.Type<IPaymentReconciliation_Detail> =
  t.recursion('IPaymentReconciliation_Detail', () =>
    t.intersection([
      t.type({
        type: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        identifier: RTTI_Identifier,
        predecessor: RTTI_Identifier,
        request: RTTI_Reference,
        submitter: RTTI_Reference,
        response: RTTI_Reference,
        date: RTTI_date,
        _date: RTTI_Element,
        responsible: RTTI_Reference,
        payee: RTTI_Reference,
        amount: RTTI_Money,
      }),
    ]),
  );
