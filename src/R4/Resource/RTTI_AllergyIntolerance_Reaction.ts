import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_dateTime} from '../Scalar/RTTI_dateTime';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
export enum AllergyIntolerance_ReactionSeverityKind {
  _mild = 'mild',
  _moderate = 'moderate',
  _severe = 'severe',
}
import {createEnumType} from '../../EnumType';

export interface IAllergyIntolerance_Reaction {
  /**
   * Clinical symptoms and/or signs that are observed or associated with the adverse reaction event.
   */
  manifestation: ICodeableConcept[];

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
   * Identification of the specific substance (or pharmaceutical product) considered to be responsible for the Adverse Reaction event. Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance.
   */
  substance?: ICodeableConcept;

  /**
   * Text description about the reaction as a whole, including details of the manifestation if required.
   */
  description?: string;

  /**
   * Extensions for description
   */
  _description?: IElement;

  /**
   * Record of the date and/or time of the onset of the Reaction.
   */
  onset?: string;

  /**
   * Extensions for onset
   */
  _onset?: IElement;

  /**
   * Clinical assessment of the severity of the reaction event as a whole, potentially considering multiple different manifestations.
   */
  severity?: AllergyIntolerance_ReactionSeverityKind;

  /**
   * Extensions for severity
   */
  _severity?: IElement;

  /**
   * Identification of the route by which the subject was exposed to the substance.
   */
  exposureRoute?: ICodeableConcept;

  /**
   * Additional text about the adverse reaction event not captured in other fields.
   */
  note?: IAnnotation[];
}

export const RTTI_AllergyIntolerance_Reaction: t.Type<IAllergyIntolerance_Reaction> =
  t.recursion('IAllergyIntolerance_Reaction', () =>
    t.intersection([
      t.type({
        manifestation: t.array(RTTI_CodeableConcept),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        substance: RTTI_CodeableConcept,
        description: t.string,
        _description: RTTI_Element,
        onset: RTTI_dateTime,
        _onset: RTTI_Element,
        severity: createEnumType<AllergyIntolerance_ReactionSeverityKind>(
          AllergyIntolerance_ReactionSeverityKind,
          'AllergyIntolerance_ReactionSeverityKind',
        ),
        _severity: RTTI_Element,
        exposureRoute: RTTI_CodeableConcept,
        note: t.array(RTTI_Annotation),
      }),
    ]),
  );
