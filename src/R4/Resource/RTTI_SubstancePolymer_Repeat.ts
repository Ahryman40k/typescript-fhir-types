import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_integer} from '../Scalar/RTTI_integer';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {
  RTTI_SubstancePolymer_RepeatUnit,
  ISubstancePolymer_RepeatUnit,
} from './RTTI_SubstancePolymer_RepeatUnit';

export interface ISubstancePolymer_Repeat {
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
   * Todo.
   */
  numberOfUnits?: number;

  /**
   * Extensions for numberOfUnits
   */
  _numberOfUnits?: IElement;

  /**
   * Todo.
   */
  averageMolecularFormula?: string;

  /**
   * Extensions for averageMolecularFormula
   */
  _averageMolecularFormula?: IElement;

  /**
   * Todo.
   */
  repeatUnitAmountType?: ICodeableConcept;

  /**
   * Todo.
   */
  repeatUnit?: ISubstancePolymer_RepeatUnit[];
}

export const RTTI_SubstancePolymer_Repeat: t.Type<ISubstancePolymer_Repeat> =
  t.recursion('ISubstancePolymer_Repeat', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      numberOfUnits: RTTI_integer,
      _numberOfUnits: RTTI_Element,
      averageMolecularFormula: t.string,
      _averageMolecularFormula: RTTI_Element,
      repeatUnitAmountType: RTTI_CodeableConcept,
      repeatUnit: t.array(RTTI_SubstancePolymer_RepeatUnit),
    }),
  );
