import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_CoverageEligibilityResponse_Benefit,
  ICoverageEligibilityResponse_Benefit,
} from './RTTI_CoverageEligibilityResponse_Benefit';
import {RTTI_uri} from '../Scalar/RTTI_uri';

export interface ICoverageEligibilityResponse_Item {
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
   * The practitioner who is eligible for the provision of the product or service.
   */
  provider?: IReference;

  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  excluded?: boolean;

  /**
   * Extensions for excluded
   */
  _excluded?: IElement;

  /**
   * A short name or tag for the benefit.
   */
  name?: string;

  /**
   * Extensions for name
   */
  _name?: IElement;

  /**
   * A richer description of the benefit or services covered.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  network?: ICodeableConcept;

  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: ICodeableConcept;

  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  term?: ICodeableConcept;

  /**
   * Benefits used to date.
   */
  benefit?: ICoverageEligibilityResponse_Benefit[];

  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  authorizationRequired?: boolean;

  /**
   * Extensions for authorizationRequired
   */
  _authorizationRequired?: IElement;

  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  authorizationSupporting?: ICodeableConcept[];

  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  authorizationUrl?: string;

  /**
   * Extensions for authorizationUrl
   */
  _authorizationUrl?: IElement;
}

export const RTTI_CoverageEligibilityResponse_Item: t.Type<ICoverageEligibilityResponse_Item> =
  t.recursion('ICoverageEligibilityResponse_Item', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      category: RTTI_CodeableConcept,
      productOrService: RTTI_CodeableConcept,
      modifier: t.array(RTTI_CodeableConcept),
      provider: RTTI_Reference,
      excluded: t.boolean,
      _excluded: RTTI_Element,
      name: t.string,
      _name: RTTI_Element,
      description: t.string,
      _description: RTTI_Element,
      network: RTTI_CodeableConcept,
      unit: RTTI_CodeableConcept,
      term: RTTI_CodeableConcept,
      benefit: t.array(RTTI_CoverageEligibilityResponse_Benefit),
      authorizationRequired: t.boolean,
      _authorizationRequired: RTTI_Element,
      authorizationSupporting: t.array(RTTI_CodeableConcept),
      authorizationUrl: RTTI_uri,
      _authorizationUrl: RTTI_Element,
    }),
  );
