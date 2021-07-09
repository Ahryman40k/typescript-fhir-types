import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';

export interface IRiskEvidenceSynthesis_CertaintySubcomponent {
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
   * Type of subcomponent of certainty rating.
   */
  type?: ICodeableConcept;

  /**
   * A rating of a subcomponent of rating certainty.
   */
  rating?: ICodeableConcept[];

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: IAnnotation[];
}

export const RTTI_RiskEvidenceSynthesis_CertaintySubcomponent: t.Type<IRiskEvidenceSynthesis_CertaintySubcomponent> =
  t.recursion('IRiskEvidenceSynthesis_CertaintySubcomponent', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      type: RTTI_CodeableConcept,
      rating: t.array(RTTI_CodeableConcept),
      note: t.array(RTTI_Annotation),
    }),
  );
