import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Range, IRange} from './RTTI_Range';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
export enum ObservationDefinition_QualifiedIntervalCategoryKind {
  _reference = 'reference',
  _critical = 'critical',
  _absolute = 'absolute',
}
export enum ObservationDefinition_QualifiedIntervalGenderKind {
  _male = 'male',
  _female = 'female',
  _other = 'other',
  _unknown = 'unknown',
}
import {createEnumType} from '../../EnumType';

export interface IObservationDefinition_QualifiedInterval {
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
   * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
   */
  category?: ObservationDefinition_QualifiedIntervalCategoryKind;

  /**
   * Extensions for category
   */
  _category?: IElement;

  /**
   * The low and high values determining the interval. There may be only one of the two.
   */
  range?: IRange;

  /**
   * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
   */
  context?: ICodeableConcept;

  /**
   * Codes to indicate the target population this reference range applies to.
   */
  appliesTo?: ICodeableConcept[];

  /**
   * Sex of the population the range applies to.
   */
  gender?: ObservationDefinition_QualifiedIntervalGenderKind;

  /**
   * Extensions for gender
   */
  _gender?: IElement;

  /**
   * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
   */
  age?: IRange;

  /**
   * The gestational age to which this reference range is applicable, in the context of pregnancy.
   */
  gestationalAge?: IRange;

  /**
   * Text based condition for which the reference range is valid.
   */
  condition?: string;

  /**
   * Extensions for condition
   */
  _condition?: IElement;
}

export const RTTI_ObservationDefinition_QualifiedInterval: t.Type<IObservationDefinition_QualifiedInterval> =
  t.recursion('IObservationDefinition_QualifiedInterval', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      category:
        createEnumType<ObservationDefinition_QualifiedIntervalCategoryKind>(
          ObservationDefinition_QualifiedIntervalCategoryKind,
          'ObservationDefinition_QualifiedIntervalCategoryKind',
        ),
      _category: RTTI_Element,
      range: RTTI_Range,
      context: RTTI_CodeableConcept,
      appliesTo: t.array(RTTI_CodeableConcept),
      gender: createEnumType<ObservationDefinition_QualifiedIntervalGenderKind>(
        ObservationDefinition_QualifiedIntervalGenderKind,
        'ObservationDefinition_QualifiedIntervalGenderKind',
      ),
      _gender: RTTI_Element,
      age: RTTI_Range,
      gestationalAge: RTTI_Range,
      condition: t.string,
      _condition: RTTI_Element,
    }),
  );
