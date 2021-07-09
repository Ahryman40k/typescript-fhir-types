import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_positiveInt} from '../Scalar/RTTI_positiveInt';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Quantity, IQuantity} from './RTTI_Quantity';
import {RTTI_Money, IMoney} from './RTTI_Money';
import {
  RTTI_CoverageEligibilityRequest_Diagnosis,
  ICoverageEligibilityRequest_Diagnosis,
} from './RTTI_CoverageEligibilityRequest_Diagnosis';

export interface ICoverageEligibilityRequest_Item {
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
   * Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  supportingInfoSequence?: number[];

  /**
   * Extensions for supportingInfoSequence
   */
  _supportingInfoSequence?: IElement[];

  /**
   * Code to identify the general type of benefits under which products and services are provided.
   */
  category?: ICodeableConcept;

  /**
   * This contains the product, service, drug or other billing code for the item.
   */
  productOrService?: ICodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for the product or service.
   */
  modifier?: ICodeableConcept[];

  /**
   * The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  provider?: IReference;

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: IQuantity;

  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  unitPrice?: IMoney;

  /**
   * Facility where the services will be provided.
   */
  facility?: IReference;

  /**
   * Patient diagnosis for which care is sought.
   */
  diagnosis?: ICoverageEligibilityRequest_Diagnosis[];

  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  detail?: IReference[];
}

export const RTTI_CoverageEligibilityRequest_Item: t.Type<ICoverageEligibilityRequest_Item> =
  t.recursion('ICoverageEligibilityRequest_Item', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      supportingInfoSequence: t.array(RTTI_positiveInt),
      _supportingInfoSequence: t.array(RTTI_Element),
      category: RTTI_CodeableConcept,
      productOrService: RTTI_CodeableConcept,
      modifier: t.array(RTTI_CodeableConcept),
      provider: RTTI_Reference,
      quantity: RTTI_Quantity,
      unitPrice: RTTI_Money,
      facility: RTTI_Reference,
      diagnosis: t.array(RTTI_CoverageEligibilityRequest_Diagnosis),
      detail: t.array(RTTI_Reference),
    }),
  );
