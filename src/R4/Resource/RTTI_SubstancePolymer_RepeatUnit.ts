import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_SubstanceAmount, ISubstanceAmount} from './RTTI_SubstanceAmount';
import {
  RTTI_SubstancePolymer_DegreeOfPolymerisation,
  ISubstancePolymer_DegreeOfPolymerisation,
} from './RTTI_SubstancePolymer_DegreeOfPolymerisation';
import {
  RTTI_SubstancePolymer_StructuralRepresentation,
  ISubstancePolymer_StructuralRepresentation,
} from './RTTI_SubstancePolymer_StructuralRepresentation';

export interface ISubstancePolymer_RepeatUnit {
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
  orientationOfPolymerisation?: ICodeableConcept;

  /**
   * Todo.
   */
  repeatUnit?: string;

  /**
   * Extensions for repeatUnit
   */
  _repeatUnit?: IElement;

  /**
   * Todo.
   */
  amount?: ISubstanceAmount;

  /**
   * Todo.
   */
  degreeOfPolymerisation?: ISubstancePolymer_DegreeOfPolymerisation[];

  /**
   * Todo.
   */
  structuralRepresentation?: ISubstancePolymer_StructuralRepresentation[];
}

export const RTTI_SubstancePolymer_RepeatUnit: t.Type<ISubstancePolymer_RepeatUnit> =
  t.recursion('ISubstancePolymer_RepeatUnit', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      orientationOfPolymerisation: RTTI_CodeableConcept,
      repeatUnit: t.string,
      _repeatUnit: RTTI_Element,
      amount: RTTI_SubstanceAmount,
      degreeOfPolymerisation: t.array(
        RTTI_SubstancePolymer_DegreeOfPolymerisation,
      ),
      structuralRepresentation: t.array(
        RTTI_SubstancePolymer_StructuralRepresentation,
      ),
    }),
  );
