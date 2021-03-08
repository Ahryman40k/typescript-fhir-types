import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_uri} from '../Scalar/RTTI_uri';
import {RTTI_Element, IElement} from './RTTI_Element';
import {
  RTTI_ConceptMap_Element,
  IConceptMap_Element,
} from './RTTI_ConceptMap_Element';
import {
  RTTI_ConceptMap_Unmapped,
  IConceptMap_Unmapped,
} from './RTTI_ConceptMap_Unmapped';

export interface IConceptMap_Group {
  /**
   * Mappings for an individual concept in the source to one or more concepts in the target.
   */
  element: IConceptMap_Element[];

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
   * An absolute URI that identifies the source system where the concepts to be mapped are defined.
   */
  source?: string;

  /**
   * Extensions for source
   */
  _source?: IElement;

  /**
   * The specific version of the code system, as determined by the code system authority.
   */
  sourceVersion?: string;

  /**
   * Extensions for sourceVersion
   */
  _sourceVersion?: IElement;

  /**
   * An absolute URI that identifies the target system that the concepts will be mapped to.
   */
  target?: string;

  /**
   * Extensions for target
   */
  _target?: IElement;

  /**
   * The specific version of the code system, as determined by the code system authority.
   */
  targetVersion?: string;

  /**
   * Extensions for targetVersion
   */
  _targetVersion?: IElement;

  /**
   * What to do when there is no mapping for the source concept. "Unmapped" does not include codes that are unmatched, and the unmapped element is ignored in a code is specified to have equivalence = unmatched.
   */
  unmapped?: IConceptMap_Unmapped;
}

export const RTTI_ConceptMap_Group: t.Type<IConceptMap_Group> = t.recursion(
  'IConceptMap_Group',
  () =>
    t.intersection([
      t.type({
        element: t.array(RTTI_ConceptMap_Element),
      }),
      t.partial({
        id: t.string,
        extension: t.array(RTTI_Extension),
        modifierExtension: t.array(RTTI_Extension),
        source: RTTI_uri,
        _source: RTTI_Element,
        sourceVersion: t.string,
        _sourceVersion: RTTI_Element,
        target: RTTI_uri,
        _target: RTTI_Element,
        targetVersion: t.string,
        _targetVersion: RTTI_Element,
        unmapped: RTTI_ConceptMap_Unmapped,
      }),
    ]),
);
