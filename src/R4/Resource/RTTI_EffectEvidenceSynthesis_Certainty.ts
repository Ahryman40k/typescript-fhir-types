import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {
  RTTI_EffectEvidenceSynthesis_CertaintySubcomponent,
  IEffectEvidenceSynthesis_CertaintySubcomponent,
} from './RTTI_EffectEvidenceSynthesis_CertaintySubcomponent';

export interface IEffectEvidenceSynthesis_Certainty {
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
   * A rating of the certainty of the effect estimate.
   */
  rating?: ICodeableConcept[];

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: IAnnotation[];

  /**
   * A description of a component of the overall certainty.
   */
  certaintySubcomponent?: IEffectEvidenceSynthesis_CertaintySubcomponent[];
}

export const RTTI_EffectEvidenceSynthesis_Certainty: t.Type<IEffectEvidenceSynthesis_Certainty> =
  t.recursion('IEffectEvidenceSynthesis_Certainty', () =>
    t.partial({
      id: t.string,
      extension: t.array(RTTI_Extension),
      modifierExtension: t.array(RTTI_Extension),
      rating: t.array(RTTI_CodeableConcept),
      note: t.array(RTTI_Annotation),
      certaintySubcomponent: t.array(
        RTTI_EffectEvidenceSynthesis_CertaintySubcomponent,
      ),
    }),
  );
