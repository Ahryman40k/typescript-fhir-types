import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_ExplanationOfBenefit_Financial,
  IExplanationOfBenefit_Financial,
} from './RTTI_ExplanationOfBenefit_Financial';

export interface IExplanationOfBenefit_BenefitBalance {
  /**
   * Code to identify the general type of benefits under which products and services are provided.
   */
  category: ICodeableConcept;

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
   * Benefits Used to date.
   */
  financial?: IExplanationOfBenefit_Financial[];
}

export const RTTI_ExplanationOfBenefit_BenefitBalance: t.Type<IExplanationOfBenefit_BenefitBalance> =
  t.recursion('IExplanationOfBenefit_BenefitBalance', () =>
    t.intersection([
      t.type({
        category: RTTI_CodeableConcept,
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        excluded: t.boolean,
        _excluded: RTTI_Element,
        name: t.string,
        _name: RTTI_Element,
        description: t.string,
        _description: RTTI_Element,
        network: RTTI_CodeableConcept,
        unit: RTTI_CodeableConcept,
        term: RTTI_CodeableConcept,
        financial: t.array(RTTI_ExplanationOfBenefit_Financial),
      }),
    ]),
  );
